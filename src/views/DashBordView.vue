<template>
<div class="home mt-5">
    <img alt="Vue logo" src="../assets/logo.png" width="100">
    <div v-if="user.email === 'admin@gmail.com'">
        <div class="jumbotron">
            <h1 class="display-4">Hello, {{user.username}}</h1>
            <p class="lead">Admin has access of all email, admin can use all users accounts</p>
            <hr class="my-4">
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>UserName</th>
                    <th>User Email</th>
                    <th>UserPassword</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in users" :key="user.id">
                    <td scope="row">{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.password}}</td>
                    <td><button class="btn btn-sm btn-danger" @click="deleteUSer(index)">Delete User</button></td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-else>
        <div class="jumbotron">
            <h1 class="display-4">Hello, {{user.username}}</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'DashBordView',

    data() {
        return {
            users: [],
            user: ''
        }
    },

    mounted() {
        if (localStorage.activeUser) {
            let lstore = localStorage.Users
            lstore = JSON.parse(lstore)
            this.users = lstore;

            let activeuser = localStorage.activeUser
            activeuser = JSON.parse(activeuser)
            this.user = activeuser

        }
    },

    methods: {
        deleteUSer(index) {
            this.users.splice(index, 1)

            if (this.users.length <= 0) {
                localStorage.removeItem("activeUser")
                localStorage.removeItem("Users")
                window.location.reload()
            } else {
                localStorage.setItem('Users', JSON.stringify(this.users))
            }

        }

    }
}
</script>
