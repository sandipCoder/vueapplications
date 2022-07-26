<template>
<div class="mt-5">
    <div class="container">
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-md-9">
                    <div class="ibox">
                        <div class="ibox-title">
                            <span class="pull-right">(<strong>{{cartlen}}</strong>) items</span>
                            <h5>Items in your cart</h5>
                        </div>
                        <div v-if="cartlen!==0">
                            <div class="ibox-content" v-for="item in getAllcartItem" :key="item.id">
                                <div class="table-responsive">
                                    <table class="table shoping-cart-table">
                                        <tbody>
                                            <tr>
                                                <td width="90">
                                                    <div class="cart-product-imitation">
                                                        <img :src="item.product.thumbnail" alt="" width="100%" />
                                                    </div>
                                                </td>
                                                <td class="desc">
                                                    <h3>
                                                        <a href="#" class="text-navy">
                                                            {{item.product.title}}
                                                        </a>
                                                    </h3>
                                                    <p class="small">
                                                        {{item.product.description}}
                                                    </p>
                                                    <p class="fw-bold"> Ratings: <span class="badge bg-success"> {{item.product.rating}} </span></p>

                                                    <div class="m-t-sm">
                                                        <a href="#" class="text-muted"><i class="fa fa-gift"></i> Add gift package</a>
                                                        |
                                                        <a href="" @click.prevent="deleCartProduct(item)" class="text-muted"><i class="fa fa-trash"></i> Remove item</a>
                                                    </div>
                                                </td>

                                                <td>
                                                    $ {{item.product.price}}
                                                    <p class="small">{{item.product.discountPercentage}}%</p>
                                                </td>
                                                <td width="65">
                                                    <input type="text" class="form-control" v-model="item.qty" />
                                                </td>
                                                <td>
                                                    <h4>$ {{item.product.price * item.qty}}</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="d-flex align-items-center justify-content-center py-5">
                                <div class="text-center">
                                    <p class="fs-3"> <span class="text-danger">Opps!</span> Product not found.</p>
                                    <p class="lead">
                                        The page you’re looking for doesn’t exist.
                                    </p>
                                    <router-link to="/products" class="btn btn-primary btn-sm"> GO product page</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="ibox-content d-flex justify-content-between">
                            <router-link to="/products" class="btn btn-white">
                                <i class="fa fa-arrow-left"></i> Continue shopping
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="ibox">
                        <div class="ibox-title">
                            <h5>Cart Summary</h5>
                        </div>
                        <div class="ibox-content">
                            <span> Total </span>
                            <h2 class="font-bold">$ {{getTotalCArt}}</h2>

                            <hr />

                            <div class="m-t-sm">
                                <div class="btn-group">
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-shopping-cart"></i> Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    name: "CartView",

    computed: {
        ...mapGetters({
            getAllcartItem: "productmodule/getAllcartItem",
            getTotalCArt: "productmodule/getTotalCArt",
            cartlen: "productmodule/getCArtLen"
        }),
    },

    methods: {
        ...mapActions({
            deleCartProduct: "productmodule/deleCartProduct"
        })
    }
};
</script>

<style scoped>
.cart-product-imitation {
    text-align: center;
    padding-top: 30px;
    height: 80;
    width: 80;
    background-color: #f8f8f9;
}

.product-imitation.xl {
    padding: 120px 0;
}

.product-desc {
    padding: 10px;
    position: relative;
}

.ecommerce .tag-list {
    padding: 0;
}

.ecommerce .fa-star {
    color: #d1dade;
}

.ecommerce .fa-star.active {
    color: #f8ac59;
}

.ecommerce .note-editor {
    border: 1px solid #e7eaec;
}

table.shoping-cart-table {
    margin-bottom: 0;
}

table.shoping-cart-table tr td {
    border: none;
    text-align: right;
}

table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
    text-align: left;
}

table.shoping-cart-table tr td:last-child {
    width: 150px;
}

.ibox {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
}

.ibox.collapsed .ibox-content {
    display: none;
}

.ibox:after,
.ibox:before {
    display: table;
}

.ibox-title {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 3px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 14px 15px 7px;
    min-height: 48px;
}

.ibox-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;
}

.ibox-footer {
    color: inherit;
    border-top: 1px solid #e7eaec;
    font-size: 90%;
    background: #ffffff;
    padding: 10px 15px;
}
</style>
