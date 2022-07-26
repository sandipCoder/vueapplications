<template>
<div class="container mt-5 mb-5">
    <div class="card">
        <div class="row g-0">
            <div class="col-md-6 border-end">
                <div class="d-flex flex-column justify-content-center">
                    <div class="main_image"> <img :src=" imgdata ? product.thumbnail : geturl" id="main_product_image"> </div>
                    <div class="thumbnail_images">
                        <ul id="thumbnail">
                            <li v-for="img in product.images" :key="img.id">
                                <img @click="changeImage(img)" :src="img" width="70" height="40">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 right-side">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>{{product.title | capitalize}}</h2> <span class="heart"><i class='fas fa-heart'></i></span>
                    </div>
                    <div class="mt-2 pr-3 content">
                        <p>{{product.description }}</p>
                    </div>
                    <h3 class="mt-5"> $ {{product.price}}</h3>
                    <div class="ratings d-flex flex-row align-items-center">
                        <div class="d-flex flex-row">
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                            <i class='fas fa-star'></i>
                        </div> <span>{{product.rating}} Ratings</span>
                    </div>
                    <div class="mt-5"> <span class="fw-bold">Color</span>
                        <div class="colors">
                            <ul id="marker">
                                <li id="marker-1"> </li>
                                <li id="marker-2"> </li>
                                <li id="marker-3"> </li>
                                <li id="marker-4"></li>
                                <li id="marker-5"></li>
                            </ul>
                        </div>
                    </div>
                    <div class="buttons d-flex flex-row mt-5 gap-3">
                        <button class="btn btn-secondary" @click="addprodTocartFetch(product)"> <i class="fas fa-shopping-cart me-1"></i> Add to Cart</button>
                        <button class="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- categories product -->
    <div class="row mt-5">
        <h1> {{product.category |capitalize }} Related</h1>
        <hr class="mb-3">
        <RelatedProducts :categoryItem="product.category" @getProductDetail="getProductDetail($event)" />
    </div>

</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapState
} from 'vuex'
import RelatedProducts from '../components/RelatedProducts.vue'
export default {
    name: "ProductDescription",
    components: {
        RelatedProducts
    },
    data() {
        return {
            id: this.$route.params.id,
            geturl: '',
            imgdata: true
        }
    },

    filters: {
        capitalize: function (value) {
            if (!value) return false

            return value.charAt(0).toUpperCase() + value.slice(1)

        }
    },

    computed: {
        ...mapState({
            singleproduct: "productmodule/product"
        }),
        ...mapGetters({
            product: "productmodule/getSingleProductData",

        }),
    },

    methods: {
        ...mapActions({
            getSingleproduct: "productmodule/getSingleproduct",
            addCartProduct: "productmodule/addCartProduct",
            getallProducts: "productmodule/getallProducts",

        }),

        addprodTocartFetch(product) {
            console.log("hello", product)
            this.addCartProduct({
                product,
                qty: 1
            })
        },

        getProductDetail(item) {
            console.log(item)
            this.getSingleproduct(item.id)

        },

        changeImage(img) {
            this.imgdata = false
            this.geturl = img
        }

    },

    mounted() {
        this.getSingleproduct(this.id)
    }
}
</script>

<style scoped>
.card {
    border: none;
    overflow: hidden
}

.thumbnail_images ul {
    list-style: none;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 10px
}

.thumbnail_images ul li {
    margin: 5px;
    padding: 10px;
    border: 2px solid #eee;
    cursor: pointer;
    transition: all 0.5s
}

.thumbnail_images ul li:hover {
    border: 2px solid #000
}

.main_image {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;
    width: 100%;
    padding: 30px 0;
    overflow: hidden
}

.heart {
    height: 29px;
    width: 29px;
    background-color: #eaeaea;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center
}

.ratings span {
    font-size: 14px;
    margin-left: 12px
}

.colors {
    margin-top: 5px
}

.colors ul {
    list-style: none;
    display: flex;
    padding-left: 0px
}

.colors ul li {
    height: 20px;
    width: 20px;
    display: flex;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer
}

.colors ul li:nth-child(1) {
    background-color: #6c704d
}

.colors ul li:nth-child(2) {
    background-color: #96918b
}

.colors ul li:nth-child(3) {
    background-color: #68778e
}

.colors ul li:nth-child(4) {
    background-color: #263f55
}

.colors ul li:nth-child(5) {
    background-color: black
}

.right-side {
    position: relative
}

.search-option {
    position: absolute;
    background-color: #000;
    overflow: hidden;
    align-items: center;
    color: #fff;
    width: 200px;
    height: 200px;
    border-radius: 49% 51% 50% 50% / 68% 69% 31% 32%;
    left: 30%;
    bottom: -250px;
    transition: all 0.5s;
    cursor: pointer
}

.search-option .first-search {
    position: absolute;
    top: 20px;
    left: 90px;
    font-size: 20px;
    opacity: 1000
}

.search-option .inputs {
    opacity: 0;
    transition: all 0.5s ease;
    transition-delay: 0.5s;
    position: relative
}

.search-option .inputs input {
    position: absolute;
    top: 200px;
    left: 30px;
    padding-left: 20px;
    background-color: transparent;
    width: 300px;
    border: none;
    color: #fff;
    border-bottom: 1px solid #eee;
    transition: all 0.5s;
    z-index: 10
}

.search-option .inputs input:focus {
    box-shadow: none;
    outline: none;
    z-index: 10
}

.search-option:hover {
    border-radius: 0px;
    width: 100%;
    left: 0px
}

.search-option:hover .inputs {
    opacity: 1
}

.search-option:hover .first-search {
    left: 27px;
    top: 25px;
    font-size: 15px
}

.search-option:hover .inputs input {
    top: 20px
}

.search-option .share {
    position: absolute;
    right: 20px;
    top: 22px
}

.buttons .btn {
    height: 50px;
    width: 150px;
    border-radius: 0px !important
}
</style>
