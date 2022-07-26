<template>
<div>
    <div>
        <div class="itemside mb-3" v-for="product in getAllcartItem" :key="product.id">
            <div class="aside">
                <img :src="product.product.thumbnail" class="img-sm rounded border" />
            </div>
            <div class="info">
                <a href="#" class="title">{{product.product.title}}</a>
                <small class="text-muted">QTY: {{product.qty}} X $ {{product.product.price}}</small>

                <!-- price .// -->
            </div>
            <div class="flex-grow-0 ms-2">
                <a href="#" class="btn btn-sm btn-light float-end" @click.prevent="$emit('deleProductFromCart',product)"><i class="fa fa-times"></i></a>
            </div>
        </div>

        <hr />
        <div class="my-3">
            Subtotal: <strong class="float-end price">$ {{getTotalCArt}}</strong>
        </div>
        <div class="d-flex justify-content-between">
            <a class="btn btn-primary btn-sm" @click="cleatAllCart"> Clear Cart</a>
            <a class="btn btn-success btn-sm" @click="checkOut"> Checkout </a>
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
    name: "MiniCart",
    data() {
        return {

        }
    },

    computed: {
        ...mapGetters({
            getAllcartItem: "productmodule/getAllcartItem",
            getTotalCArt: "productmodule/getTotalCArt",

        }),

    },

    methods: {
        ...mapActions({
            cleatAllCart: "productmodule/cleatAllCart",
        }),

        checkOut() {
            this.$router.push('/cart')
        }
    }

}
</script>

<style scoped>
.itemside {
    position: relative;
    display: flex;
    width: 100%;
}

.itemside .aside {
    position: relative;
    flex-shrink: 0;
}

.img-sm {
    width: 50px;
    height: 50px;
}

.itemside .info {
    padding-left: 0.75rem;
    flex-grow: 1;
}

.itemside a.title {
    color: inherit;
}

.itemside .title {
    display: block;
    margin-bottom: 0rem;
}

.btn-light {
    background-color: #fff;
    border-color: #dee2e6;
    color: #212529;
}
</style>
