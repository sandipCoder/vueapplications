<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" to="/dashboard">
            <img alt="Vue logo" src="../assets/logo.png" width="20" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" v-if="user">
                    <router-link class="nav-link" aria-current="page" to="/dashboard">Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="user">
                    <router-link class="nav-link" to="/users">Users</router-link>
                </li>
                <li class="nav-item" v-if="user">
                    <router-link class="nav-link" to="/products">Products</router-link>
                </li>
                <li class="nav-item dropdown" v-if="user">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Apps
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <router-link class="dropdown-item" to="/axiospost">Axios posts</router-link>
                        </li>
                        <li>
                            <router-link class="dropdown-item" to="/vuextodos">
                                Vuex Todos
                            </router-link>
                        </li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li>
                            <router-link class="dropdown-item" to="/vuejstodos">Vue Todos</router-link>
                        </li>
                    </ul>
                </li>

                <form class="mx-5">
                    <div class="input-group">
                        <input type="text" v-model="serchItem" class="form-control" style="width:80%; width: 450px;" placeholder="Search">
                        <!-- <select class="form-select">
                            <option value="">All type</option>
                            <option value="codex">Special</option>
                            <option value="comments">Only best</option>
                            <option value="content">Latest</option>
                        </select> -->
                        <button class="btn btn-primary" @click.prevent="searchProduct">
                            <i class="fa fa-search"></i>
                        </button>
                    </div> <!-- input-group end.// -->
                </form>
            </ul>

            <div class="d-flex navbar-nav" v-if="user">
                <div class="dropdown" @click.stop>
                    <a href="#" class="btn btn-primary btn-sm dropdown-toggle" data-bs-toggle="dropdown">
                        {{cartlen}} Cart
                    </a>
                    <div class="dropdown-menu p-3" :class="[cartlen === 0 ? 'dnone ' : 'dblock']" style="min-width: 350px;right:0; left:auto;" data-popper-placement="bottom-end">
                        <MiniCart @deleProductFromCart="deleProductFromCart($event)" />
                    </div>
                </div>
            </div>

            <div class="d-flex navbar-nav mx-2" v-if="user">
                <button class="btn btn-sm btn-secondary" href="" @click="logoutUSer">
                    logout
                </button>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import MiniCart from "./MiniCart.vue";
import {
    bus
} from "../main"
export default {
    name: "HeaderView",
    components: {
        MiniCart,
    },

    data() {
        return {
            user: "",
            serchItem: null,
            serchData: false
        };
    },
    computed: {
        ...mapGetters({
            cartlen: "productmodule/getCArtLen",
        }),
    },
    mounted() {
        if (localStorage.activeUser) {
            let lactiveUser = localStorage.activeUser;
            lactiveUser = JSON.parse(lactiveUser);
            this.user = lactiveUser;
            // console.log(this.user)
        }
    },

    methods: {
        ...mapActions({
            deleCartProduct: "productmodule/deleCartProduct",
            serchProductsDetails: "productmodule/serchProductsDetails"
        }),

        deleProductFromCart(product) {
            console.log("prodcut", product);
            this.deleCartProduct(product);
        },

        logoutUSer() {
            localStorage.removeItem("activeUser");
            this.$router.push("/signIn");
            window.location.reload();
        },

        searchProduct() {
            console.log(this.serchItem)
            this.serchProductsDetails(this.serchItem)
            bus.$emit('chaangeBusSerch', this.serchData)

            bus.$emit('serchProdct', this.serchItem)

            this.serchItem = ""
        }
    },
};
</script>

<style scoped>
.dnone {
    display: none;
}

.dshow {
    display: show;
}
</style>
