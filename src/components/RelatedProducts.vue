<template>
<div class="row">
   
    <div class="col-md-3 mb-3" v-for="(item,index) in categoriesproduct.products" :key="index">
        <div class="card card-product-grid">
            <div class="img-wrap">
                <a @click="gerRealatedProduct(item)">
                    <img :src="item.thumbnail" class="card-img-top img-fluid p-2" style="height: 220px" alt="..." />
                </a>
            </div>
            <div class="info-wrap">
                <h4 class="title fw-light">{{ item.title.slice(0,20) |capitalize   }}</h4>
                <p class="p-0 m-0">{{ item.description.slice(0,50)  }}</p>
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
                <div class="price-wrap lh-sm">
                    <strong class="price"> $ {{ item.price }}</strong> <br />
                    <small class="text-muted">
                        {{ item.discountPercentage }}% Discount
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
    name: "RelatedProducts",
    props: ['categoryItem'],
    data() {
        return {

        }
    },

    computed: {
        ...mapGetters({
            categoriesproduct: "productmodule/getAllitemFormCategries",
        })
    },

    filters: {
        capitalize: function (value) {
            if (!value) return false

            return value.charAt(0).toUpperCase() + value.slice(1)

        }
    },

    methods: {
        gerRealatedProduct(item){
         //   console.log(item)
            this.$emit("getProductDetail",item)
        }
    },

    mounted() {

    }

}
</script>

<style>

</style>
