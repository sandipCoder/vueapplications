<template>
<div class="about container mt-5">
    <div class="row">

        <div class="jumbotron">
            <h1 class="display-6">Hello, All Users!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
        </div>

        <div class="col-sm-4 col-lg-3 mb-4" v-for="user in users" :key="user.id">
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
                        <div class="my-2 d-flex justify-content-around linkrouter">
                            <button type="button" class="btn-sm btn btn-primary">
                                <router-link :to="`/singleuser/${user.id}`">Posts</router-link>
                            </button>
                            <button type="button" class="btn-sm btn btn-success">
                                <router-link :to="`/albums/${user.id}`">Albums</router-link>
                            </button>
                            <button type="button" class="btn-sm btn btn-danger">
                                <router-link :to="`/todos/${user.id}`">Todos</router-link>
                            </button>
                        </div>

                    </div>
                    <div class="candidate-list-favourite-time">
                        <span class="candidate-list-time order-1"><i class="fas fa-phone"></i> {{user.phone}}</span>
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
    name: "UserView",
    data() {
        return {
            users: '',

        }
    },

    mounted() {
        axios.get('http://localhost:3000/users').then(res => {
            this.users = res.data
        })
    },

}
</script>

<style scoped>
.candidate-list {
    background: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.candidate-list:hover {
    -webkit-box-shadow: 0px 0px 34px 4px rgba(33, 37, 41, 0.06);
    box-shadow: 0px 0px 34px 4px rgba(33, 37, 41, 0.06);
    position: relative;
    z-index: 99;
}

.candidate-list:hover a.candidate-list-favourite {
    color: #e74c3c;
    -webkit-box-shadow: -1px 4px 10px 1px rgba(24, 111, 201, 0.1);
    box-shadow: -1px 4px 10px 1px rgba(24, 111, 201, 0.1);
}

.candidate-list .candidate-list-image {
    margin-right: 25px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80px;
    flex: 0 0 80px;
    border: none;
}

.candidate-list .candidate-list-image img {
    width: 80px;
    height: 80px;
    -o-object-fit: cover;
    object-fit: cover;
}

.candidate-list-title {
    margin-bottom: 5px;
}

.candidate-list-details ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 0px;
}

.candidate-list-details ul li {
    margin: 5px 10px 5px 0px;
    font-size: 13px;
}

.candidate-list .candidate-list-favourite-time {
    margin-left: auto;
    text-align: center;
    font-size: 13px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 90px;
    flex: 0 0 90px;
}

.candidate-list .candidate-list-favourite-time span {
    display: block;
    margin: 0 auto;
}

.candidate-list .candidate-list-favourite-time .candidate-list-favourite {
    display: inline-block;
    position: relative;
    height: 40px;
    width: 40px;
    line-height: 40px;
    border: 1px solid #eeeeee;
    border-radius: 100%;
    text-align: center;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;
    font-size: 16px;
    color: #646f79;
}

.candidate-list .candidate-list-favourite-time .candidate-list-favourite:hover {
    background: #ffffff;
    color: #e74c3c;
}

.candidate-banner .candidate-list:hover {
    position: inherit;
    -webkit-box-shadow: inherit;
    box-shadow: inherit;
    z-index: inherit;
}

/* Candidate Grid */
.candidate-list.candidate-grid {
    padding: 0px;
    display: block;
    border-bottom: none;
}

.candidate-grid .candidate-list-image {
    text-align: center;
    margin-right: 0px;
}

.candidate-grid .candidate-list-image img {
    height: 150px;
    width: 100%;
}

.candidate-grid .candidate-list-details {
    text-align: center;
    padding: 20px 20px 0px 20px;
    border: 1px solid #eeeeee;
    border-top: none;
}

.candidate-grid .candidate-list-details ul {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.candidate-grid .candidate-list-details ul li {
    margin: 2px 5px;
}

.candidate-grid .candidate-list-favourite-time {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-top: 1px solid #eeeeee;
    margin-top: 10px;
    padding: 10px 0;
}

.candidate-grid .candidate-list-favourite-time a {
    margin-bottom: 0;
    margin-left: auto;
}

.candidate-grid .candidate-list-favourite-time span {
    display: inline-block;
    margin: 0;
    -ms-flex-item-align: center;
    align-self: center;
}

.candidate-list.candidate-grid .candidate-list-favourite-time .candidate-list-favourite {
    margin-bottom: 0px;
}

.linkrouter button a {
    color: #fff;
}
</style>
