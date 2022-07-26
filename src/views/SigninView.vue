<template>
<div class="col-md-4 mt-5">
    <div class="alert alert-success" role="alert" v-if="getsuccess">
        <strong>User login successfully............!</strong>
    </div>

    <div class="alert alert-warning" role="alert" v-if="alertmessage">
        <strong>User must be valid............!</strong>
    </div>

    <form @submit.prevent="signIn">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">

        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
        </div>
        <p>If You don't have an account please <router-link to="/"> SignUp </router-link>
        </p>
        <button type="submit" class="btn btn-primary">Sign IN</button>
    </form>
</div>
</template>

<script>
export default {
    name: "SigninView",
    data() {
        return {
            email: "",
            password: "",
            currentsuser: "",
            getsuccess: false,
            alertmessage: false

        }
    },

    methods: {
        signIn() {
            if (this.email === '' || this.password === '') {
                this.alertmessage = true
                setTimeout(() => {
                    this.alertmessage = false
                }, 1000)
            } else {
                let user = {
                    email: this.email,
                    password: this.password
                }
                //get all users
                let ltuser = localStorage.Users
                ltuser = JSON.parse(ltuser)

                //get user Index
                let userIndex = ltuser.findIndex(lsuser => {
                    return lsuser.email === user.email
                })

                if (userIndex > -1) {
                    let passwordIndex = ltuser.findIndex((pssIndex) => {
                        if (ltuser[userIndex].password === user.password) {
                            return pssIndex.password === user.password
                        }

                    })

                    if (passwordIndex > -1) {
                        let activeUSer = ltuser.find(actuser => {
                            return actuser.email === user.email
                        })
                        this.getsuccess = true
                        setTimeout(() => {
                            localStorage.setItem("activeUser", JSON.stringify(activeUSer))
                            this.email = "",
                                this.password = ""

                            this.$router.push("/dashboard")
                            window.location.reload();
                        }, 2000)

                    }

                }

            }
        }
    }
}
</script>

<style>

</style>
