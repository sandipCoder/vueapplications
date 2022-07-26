<template>
<div class="mt-5">
    <ul class="list-group">
        <li class=" d-flex justify-content-between align-items-start my-4">
            <div class="jumbotron">
                <h4 class="text-success">{{post.title | capitalize}}</h4>
                <hr class="my-1">
                <p class="bodytext">{{post.body | capitalize}}</p>
                <p class="lead">
                    <button class="btn btn-primary btn-sm " @click="gotopostpage" role="button">go To posts page</button>
                </p>
            </div>
        </li>
    </ul>

    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Recent Comments</h4>
                <h6 class="card-subtitle">Latest Comments section by users</h6>
            </div>
            <div class="comment-widgets m-b-20">
                <div class="d-flex flex-row comment-row" v-for="comment in comments" :key="comment.id">
                    <div class="p-2"><span class="round"><img src="https://i.imgur.com/uIgDDDd.jpg" alt="user" width="50"></span></div>
                    <div class="comment-text w-100">
                        <h5>{{comment.name}}</h5>
                        <div class="comment-footer">
                            <span class="date"> {{comment.email}}</span>
                            <span class="label label-info">Pending</span> <span class="action-icons">
                                <a href="#" data-abc="true"><i class="fa fa-pencil"></i></a>
                                <a href="#" data-abc="true"><i class="fa fa-rotate-right"></i></a>
                                <a href="#" data-abc="true"><i class="fa fa-heart"></i></a>
                            </span>
                        </div>
                        <p class="m-b-5 m-t-10 ">{{comment.body}}</p>
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
    name: "SinglePost",
    data() {
        return {
            id: this.$route.params.id,
            post: '',
            comments: ''
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return "";
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    mounted() {
        axios.get(`http://localhost:3000/posts/${this.id}`).then(res => {
            return this.post = res.data
        })

        axios.get(`http://localhost:3000/posts/${this.id}/comments`).then(res => {
            this.comments = res.data
        })
    },

    methods: {
        gotopostpage() {
            this.$router.push('/axiospost')
        }
    }
}
</script>

<style scoped>
.card-no-border .card {
    border: 0px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05)
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem
}

.comment-widgets .comment-row:hover {
    background: rgba(0, 0, 0, 0.02);
    cursor: pointer;
}

.comment-widgets .comment-row {
    border-bottom: 1px solid rgba(120, 130, 140, 0.13);
    padding: 15px;
}

.comment-text:hover {
    visibility: hidden;
}

.comment-text:hover {
    visibility: visible;
}

.label {
    padding: 3px 10px;
    line-height: 13px;
    color: #ffffff;
    font-weight: 400;
    border-radius: 4px;
    font-size: 75%;
}

.round img {
    border-radius: 100%;
}

.label-info {
    background-color: #1976d2;
}

.label-success {
    background-color: green;
}

.label-danger {
    background-color: #ef5350;
}

.action-icons a {
    padding-left: 7px;
    vertical-align: middle;
    color: #99abb4;
}

.action-icons a:hover {
    color: #1976d2;
}

.mt-100 {
    margin-top: 100px
}

.mb-100 {
    margin-bottom: 100px
}

h4 {
    font-size: 2.5rem;
    font-weight: 900;
}

.bodytext {
    font-size: 1.5rem;
}
</style>
