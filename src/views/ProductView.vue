<template>
<div class="container mt-5">
    <Product :products="getallProducts" />
</div>
</template>

<script>
import {
    mapActions,
    mapGetters,
    mapState
} from "vuex";
import Product from "../components/Product.vue";
export default {
    name: "ProductView",
    components: {
        Product,
    },

    computed: {
        ...mapState({
            products: "productmodule/products",
        }),

        ...mapGetters({
            getallProducts: "productmodule/getallProducts",
        }),
    },

    methods: {
        ...mapActions({
            fetchAllproducts: "productmodule/fetchAllproducts",
        }),
    },

    mounted() {
        this.fetchAllproducts();
    },
};
</script>

<style>
a {
    text-decoration: none;
}
</style>
