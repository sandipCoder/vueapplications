<template>
<div class="row">
    <div class="col-md-4 mb-3" v-for="(product,index) in getAllitemFormCategries.products" :key="index">
        <div class="card card-product-grid">
            <div class="img-wrap">
                <router-link :to="`/productdescription/${product.id}`">
                    <img :src="product.thumbnail" class="card-img-top img-fluid p-2" style="height: 220px" alt="..." />
                </router-link>
            </div>
            <div class="info-wrap">
                <h4 class="title fw-light">{{ product.title | headerLimt }}</h4>
                <p class="p-0 m-0">{{ product.description | limitDesc }}</p>
                <div class="rating-wrap pt-2">
                    <ul class="rating-stars">
                        <li class="stars-active" style="width: 90%">
                            <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i>
                        </li>
                    </ul>
                    <span class="label-rating text-warning">4.5 Ratings</span>
                </div>
                <!-- rating-wrap.// -->
            </div>
            <div class="bottom-wrap">
                <button class="btn btn-secondary float-end" @click="addCartITem(product)">
                    <i class="fas fa-shopping-cart me-1"></i> Add to cart
                </button>
                <div class="price-wrap lh-sm">
                    <strong class="price"> $ {{ product.price }}</strong> <br />
                    <small class="text-muted">
                        {{ product.discountPercentage }}% Discount
                    </small>
                </div>
                <!-- price-wrap.// -->
            </div>
            <!-- bottom-wrap.// -->
        </div>

    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    name: "CategoriesProduct",

    computed: {
        ...mapGetters({
            getAllitemFormCategries: "productmodule/getAllitemFormCategries"
        }),
    },

    filters: {
        limitDesc(value) {
            if (!value) return false
            return value.slice(0, 50);
        },
        headerLimt(value) {
            return value.slice(0, 20);
        },
    },

    methods: {
        ...mapActions({
            addCartProduct: "productmodule/addCartProduct",
        }),

        addCartITem(product) {
            console.log("product", product)
            this.addCartProduct({
                product,
                qty: 1
            })
        }
    },

}
</script>

<style>

</style>
