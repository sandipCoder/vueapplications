<template>
<div class="row">
    <!-- <div v-for="product in getAllserachITems.products" :key="product.id">
        <div class="card card-product-grid">
            <div class="col-md-4 mb-3">
                <div class="img-wrap">
                    <a @click="getCAtegories(product)">
                        <img :src="product.thumbnail" class="card-img-top img-fluid p-2" style="height: 220px" alt="..." />
                    </a>
                </div>
            </div>
            <div class="col-md-8 mb-3">
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
                        <span class="label-rating text-warning"> 4.5 Ratings </span>
                    </div>

                </div>
                <div class="bottom-wrap">
                    <button class="btn btn-secondary float-end" @click="addCartITem(product)">
                        Add to cart
                    </button>
                    <div class="price-wrap lh-sm">
                        <strong class="price"> $ {{ product.price }}</strong> <br />
                        <small class="text-muted">
                            {{ product.discountPercentage }}% Discount
                        </small>
                    </div>

                </div>

            </div>
        </div>
    </div> -->

    <article class="card card-product-list product-lg my-3" v-for="product in getAllserachITems.products" :key="product.id">
        <div class="row g-0">
            <aside class="col-xl-4 col-md-5"> <a href="#" @click="getCAtegories(product)" class="img-wrap">
                    <img :src="product.thumbnail" style="height: 220px" /> </a>
            </aside> <!-- col.// -->
            <div class="col-xl-8 col-md-7 border-start px-2">
                <div class="card-body"> <a href="#" class="h4 mb-1 title"> {{ product.title | headerLimt }}</a>
                    <p class="mb-1 text-muted"> {{ product.description | limitDesc }}</p>
                    <div class="rating-wrap mb-2">
                        <ul class="rating-stars">
                            <li class="stars-active" style="width: 80%;">
                                <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </li>
                            <li> </li>
                        </ul> <span class="label-rating text-warning">4.5</span> <i class="dot"></i> <span class="label-rating text-muted">154 orders</span> <i class="dot"></i>
                    </div> <!-- rating-wrap.// -->
                    <div class="price-wrap mb-3"> <strong class="price h5 fw-bold">${{ product.price }} </strong> <span class="badge bg-secondary"> {{ product.discountPercentage }}% Discount </span> </div> <!-- price-wrap // -->
                    <div class="row row-cols-auto gx-2 gy-3 align-items-center">
                        <div> <a href="#" class="btn btn-secondary" @click="addCartITem(product)"> <i class="fas fa-shopping-cart me-1"></i> Add to cart </a> </div>
                    </div>
                </div> <!-- info-div.// -->
            </div> <!-- col.// -->
        </div> <!-- row.// -->
    </article>
</div>
</template>

<script>
import {
    mapGetters,mapActions
} from 'vuex'
export default {

    data() {
        return {

        }
    },

    computed: {
        ...mapGetters({
            getAllserachITems: "productmodule/getAllserachITems"
        })
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
            getCAtegoriesdata:"productmodule/getCAtegoriesdata"
        }),

        addCartITem(product) {
            console.log("product", product)
            this.addCartProduct({
                product,
                qty: 1
            })
        },

        getCAtegories(product){
           this.$router.push(`/productdescription/${product.id}`)
            this.getCAtegoriesdata(product.category)
        }
    }
}
</script>

<style>
.stars-active,
i {
    color: orange
}
</style>
