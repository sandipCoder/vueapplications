<template>
<div class="mt-5">
    <h2>All Posts</h2>
    <hr>
    <button class="btn btn-sm btn-warning"  @click="addHidePostform"> add New Post</button>
    <br>   <br>
    <div v-if="addposts">
        <form>
            <div class="mb-3">
                <label for="textIdtitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="textIdtitle" v-model="title">

            </div>
            <div class="mb-3">
                <label for="bodyID" class="form-label">Body</label>
                <input type="text" class="form-control" id="bodyID" v-model="body">
            </div>

            <button class="btn btn-primary  btn-sm" @click.prevent="createPost">Create Post</button>

            <button class="btn btn-success btn-sm mx-2" v-if="uppost" @click.prevent="postUpdate">UpDatePost</button>
        </form>
    </div>
    <hr />
    <ul class="list-group">
        <li class=" d-flex justify-content-between align-items-start my-4" v-for="post in posts" :key="post.id">
            <div class="jumbotron">
                <router-link :to="`/SinglePost/${post.id}`">
                    <h4 class="text-success"> {{post.title | capitalize}} </h4>
                </router-link>

                <hr class="my-1">
                <p class="bodytext">{{post.body | capitalize}}</p>
                <p class="lead">
                    <button class="btn btn-danger btn-sm " @click="delePost(post.id)" role="button">Delete</button>

                    <button class="btn btn-success btn-sm mx-3" @click="updatePost(post.id)" role="button">Update </button>

                    <button class="btn btn-info btn-sm mr-3" @click="patchPost(post.id)" role="button">Patch post </button>
                </p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: "AxiosPost",
    data() {
        return {
            posts: [],
            post: '',
            title: '',
            body: '',
            getIds: '',
            uppost: false,
            addposts: false
        }
    },
    mounted() {
        this.getPost()
    },

    filters: {
        capitalize: function (value) {
            if (!value) return "";
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },

    methods: {
        addHidePostform() {
          this.addposts =!this.addposts
        },
        async getPost() {
            const data = await axios.get("http://localhost:3000/posts")
            this.posts = data.data
        },

        async delePost(id) {
            console.log("delePost post")
            await axios.delete(`http://localhost:3000/posts/${id}`)
            this.getPost()
        },

        async createPost() {
            if (this.title === '' || this.body === '') return
            await axios.post("http://localhost:3000/posts/", {
                title: this.title,
                body: this.body
            })

        },

        //updated text in text box
        async updatePost(id) {
            this.getIds = id
            this.uppost = true
            const response = await axios.get(`http://localhost:3000/posts/${id}`)
            this.title = response.data.title;
            this.body = response.data.body;

        },

        //post updated
        async postUpdate() {
            //console.log(this.getIds)
            await axios.put(`http://localhost:3000/posts/${this.getIds}`, {
                title: this.title,
                body: this.body
            })
        },

        ///patch only realated content change
        async patchPost(id) {
            await axios.patch(`http://localhost:3000/posts/${id}`, {
                title: "Rohan Sharma"
            })

        }

    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

h4 {
    font-size: 2.5rem;
    font-weight: 900;
}

.bodytext {
    font-size: 1.5rem;
}
</style>
