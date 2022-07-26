<template>
<div>

    <div class="about container mt-5">
        <div class="row">
            <div class="jumbotron">
                <h1 class="display-6">All Photos </h1>
                <p class="lead">These are all photos of current Album</p>
                <p class="lead">
                    <button class="btn btn-primary btn-sm " @click="gotopostpage" role="button">go To posts page</button>
                </p>
            </div>

            <div class="col-sm-3 col-lg-3 mb-4" v-for="photo in photos" :key="photo.id">
                <hr class="my-1">
                <div class="card" style="width: 18rem;">
                    <img :src="photo.url" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{photo.title | capitalize}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "UserUlbum",
    data() {
        return {
            photos: '',
            id: this.$route.params.id
        }
    },
    filters: {
        capitalize(value) {
            if (!value) return false
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },

    mounted() {
        axios.get(`http://localhost:3000/albums/${this.id}/photos`).then(res => {
            return this.photos = res.data
        })
    },

    methods: {
        gotopostpage() {
            this.$router.push("/users")
        }
    }
}
</script>

<style>

</style>
