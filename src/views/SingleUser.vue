<template>
<div>
    <div class="about container mt-5">
        <div class="row">

            <div class="jumbotron">
                <h1 class="display-6">Hello, {{user.name}}</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
            </div>

            <div class="col-sm-4 col-lg-3 mb-4">
                <div class="candidate-list candidate-grid">
                    <div class="candidate-list-image">
                        <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                    </div>
                    <div class="candidate-list-details">
                        <div class="candidate-list-info">
                            <div class="candidate-list-title">
                                <h5 class="my-2">
                                    {{user.name}}
                                </h5>
                            </div>
                            <div class="candidate-list-option">
                                <ul class="list-unstyled">
                                    <li><i class="fas fa-envelope pr-1"></i> {{user.email}} </li>
                                    <li><i class="fas fa-map-marker-alt pr-1"></i> {{user.address.street}}, {{user.address.city}}, {{user.address.suite}}</li>
                                    <li><i class="fas fa-globe pr-1"></i> {{user.website}} </li>
                                    <i class="fa-regular fa-browser"></i>
                                    <li><i class="fas fa-area-chart pr-1"></i>{{user.company.name}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="candidate-list-favourite-time">
                            <span class="candidate-list-time order-1"><i class="fas fa-phone"></i> {{user.phone}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8 col-lg-8 mb-4">
                <h3 class=""> App Posts</h3>
                <hr class="my-1">
                <ul class="list-group">
                    <li class=" d-flex justify-content-between align-items-start my-2" v-for="post in posts" :key="post.id">
                        <div class="jumbotron">
                            <router-link :to="`/comments/${post.id}`">
                                <h4 class="text-success"> {{post.title | capitalize}} </h4>
                            </router-link>

                            <hr class="my-1">
                            <p class="bodytext">{{post.body | capitalize}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SingleUser",
    filters: {
        capitalize(value) {
            if (!value) return false
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
    data() {
        return {
            userid: this.$route.params.id,
            user: "",
            posts: ''
        }
    },

    mounted() {
        console.log(this.userid)
        axios.get(`http://localhost:3000/users/${this.userid}`).then(res => {
                this.user = res.data
            }),
            axios.get(`http://localhost:3000/users/${this.userid}/posts`).then(res => {
                return this.posts = res.data
            })
    }

}
</script>

<style>

</style>
