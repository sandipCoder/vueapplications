<template>
<div>
    <div class="about container mt-5">
        <div class="row">
            <div class="jumbotron">
                <h1 class="display-6">All Todos </h1>
                <p class="lead">These are all todos of current user</p>
                <hr class="my-3">
            </div>

            <div class="col-sm-4 col-lg-3 mb-4">
                <div class="candidate-list candidate-grid">
                    <div class="candidate-list-image">
                        <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                    </div>
                    <div class="candidate-list-details">
                        <div class="candidate-list-info">
                            <div class="candidate-list-title">
                                <h4>
                                    <router-link :to="`/singleuser/${user.id}`">{{user.name}}</router-link>
                                </h4>
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
            <div class="col-sm-8 col-lg-9 mb-4">
                <h3>Todos</h3>
                <hr class="my-1">
                <div class="row">
                    <div class="card col-4 my-2" v-for="todo in todos" :key="todo.id">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{todo.title | capitalize}}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Status : {{todo.completed}}</li>
                        </ul>
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
    name: "TodosView",
    data() {
        return {
            todos: '',
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

        axios.get(`http://localhost:3000/users/${this.id}/todos`).then(res => {
            return this.todos = res.data
        })
    }
}
</script>

<style>

</style>
