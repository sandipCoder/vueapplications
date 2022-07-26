<template>
<div class="row">
    <Categories @shocategory="shocategory" @hideCategory="hideCategory" @getfilterVal="getfilterVal($event)" />
    <div class="view col-md-9">
        <div class="row" v-if="productdata === true">
            <div class="col-md-4 mb-3" v-for="product in products" :key="product.id" v-if="product.price>Number(maxval)">
                <div class="card card-product-grid">
                    <div class="img-wrap">
                        <a @click="getCAtegories(product)">
                            <img :src="product.thumbnail" class="card-img-top img-fluid p-2" style="height: 220px" alt="..." />
                        </a>
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
        <!-- categories product -->
        <div class="row" v-else-if="showcategoriesData">
            <h1> {{categorydata}} products</h1>
            <hr class="mb-3">
            <CategoriesProduct />
        </div>

        <div class="row" v-else>
            <h1>Products</h1>
            <hr class="mb-3">

            <div v-if="searchVal === ''">
                <div>
                    <p>please enter valid product</p>
                </div>
            </div>

            <SearchProducts v-else />
        </div>

    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
} from "vuex";
import Categories from './Categories.vue';
import CategoriesProduct from "./CategoriesProduct.vue";
import SearchProducts from './SearchProducts.vue';
import {
    bus
} from "../main"
export default {
    components: {
        Categories,
        CategoriesProduct,
        SearchProducts
    },
    name: "Product",
    props: ["products"],

    data() {
        return {
            productdata: true,
            showcategoriesData: true,
            categorydata: '',
            serchitem: true,
            divshowdata: false,
            searchVal: '',
            maxval: ''
        };
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
            getCAtegoriesdata: "productmodule/getCAtegoriesdata"

        }),

        addCartITem(product) {
            console.log(product);
            if (product) {
                this.addCartProduct({
                    product,
                    qty: 1,
                });
            } else {
                alert("please add product first")
            }

        },
        goTOCArt() {
            this.$router.push("/cart");
        },

        shocategory(showcategories, text) {
            this.productdata = showcategories
            this.categorydata = text
            this.showcategoriesData = true
        },

        hideCategory(hidecategories) {
            this.productdata = hidecategories
        },

        getCAtegories(product) {
            this.$router.push(`/productdescription/${product.id}`)
            // console.log(product.category)
            this.getCAtegoriesdata(product.category)

        },

        getfilterVal(rangemaxval) {
            this.maxval = rangemaxval
        }
    },

    ////event bus
    created() {
        bus.$on('chaangeBusSerch', (data) => {
                console.log(data)
                this.productdata = data
                this.showcategoriesData = data
            }),

            bus.$on('serchProdct', (data) => {
                this.searchVal = data
            })
    }
};
</script>

<style>
.card.card-product-grid .img-wrap {
    border-radius: 0.25rem 0.25rem 0 0;
}

.card-product-grid .img-wrap {
    height: 200px;
}

[class*="card-product"] .img-wrap {
    position: relative;
}

.img-wrap {
    position: relative;
    text-align: center;
    overflow: hidden;
    display: block;
}

.card-product-grid .info-wrap {
    padding: 1rem 1.2rem;
    overflow: hidden;
}

.rating-stars {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    white-space: nowrap;
    clear: both;
}

.label-rating {
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
}

.card-product-grid .bottom-wrap {
    padding: 1rem 1.2rem;
    border-top: 1px solid #dee2e6;
}

.card.card-product-grid:hover,
.card.card-product-list:hover {
    box-shadow: 0 3px 10px rgb(51 51 51 / 10%);
    transition: 0.2s;
}

/* .alert-success {
    margin: 0;
    width: 350px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    transition: opacity 0.5s ease;

} */

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
