<template>
<div>
    <div class="about container mt-5">
        <div class="row">
            <div class="jumbotron">
                <h1 class="display-6">All Albums </h1>
                <p class="lead">These are all albums of current user</p>
                <p class="lead">
                    <button class="btn btn-primary btn-sm " @click="gotopostpage" role="button">go To posts page</button>
                </p>
            </div>
            <hr class="my-1">
            <div class="col-sm-4 col-lg-3 mb-4">
                <div class="candidate-list candidate-grid">
                    <div class="candidate-list-image">
                        <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                    </div>
                    <div class="candidate-list-details">
                        <div class="candidate-list-info">
                            <div class="candidate-list-title">
                                <h5>
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
                <ul class="list-group">
                    <li class=" d-flex justify-content-between align-items-start my-2" v-for="albumuser in albumdata" :key="albumuser.id">
                        <div class="jumbotron">
                            <router-link :to="`/useralbumphoto/${albumuser.id}`">
                                <h4 class="text-success"> {{albumuser.title | capitalize}} </h4>
                            </router-link>
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
    name: "AlbumView",
    data() {
        return {
            albumdata: '',
            id: this.$route.params.id,
            user: ''
        }
    },
    filters: {
        capitalize(value) {
            if (!value) return false
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },

    mounted() {
        axios.get(`http://localhost:3000/users/${this.id}`).then(res => {
            return this.user = res.data
        })
        axios.get(`http://localhost:3000/users/${this.id}/albums`).then(res => {
            return this.albumdata = res.data
        })
    },

    methods:{
        gotopostpage(){
            this.$router.push("/users")
        }
    }
}
</script>

<style>

</style>
