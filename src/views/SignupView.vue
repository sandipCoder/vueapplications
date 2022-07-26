<template>
<div class="col-md-4 mt-5">
    <div class="alert alert-success" role="alert" v-if="alert">
        <strong>User has added successfully............!</strong>
    </div>

    <div class="alert alert-info" role="alert" v-if="useralert">
        <strong> Please provide valid users </strong>
    </div>

    <form @submit.prevent="signUpForm">
        <div class="mb-3">
            <label for="userID" class="form-label">User Name</label>
            <input type="text" class="form-control" id="userID" v-model="username">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="cpasswordId" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" v-model="cpassword" id="cpasswordId">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="isDone">
            <label class="form-check-label" for="exampleCheck1">To agree to terms and Condition</label>
        </div>
        <p>If You have an account please <router-link to="/signIn"> SignIn </router-link>
        </p>
        <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
</div>
</template>

<script>
export default {
    name: "SignupView",
    data() {
        return {
            users: [],
            username: '',
            email: "",
            password: "",
            cpassword: "",
            isDone: false,
            alert: false,
            useralert: false

        }
    },

    methods: {
        signUpForm() {
            if (this.username === '' || this.email === '' || this.password === '' || this.cpassword === '') {
                this.useralert = true
                setTimeout(() => {
                    this.useralert = false
                }, 1000);

            } else {
                let user = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    cpassword: this.cpassword,
                    isDone: this.isDone
                }

                if (localStorage.Users) {
                    let ltuser = localStorage.Users
                    ltuser = JSON.parse(ltuser)
                    this.users = ltuser
                }

                this.users.push(user)
                localStorage.setItem("Users", JSON.stringify(this.users))
                this.alert = true
                setTimeout(() => {
                    this.alert = false
                }, 1000)

                this.username = "",
                    this.email = "",
                    this.password = "",
                    this.cpassword = "",
                    this.isDone = false
            }
        }
    }
}
</script>

<style>

</style>
