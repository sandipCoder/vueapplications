import axios from "axios"
import product from "@/Api/product"
export default {
    namespaced: true,
    state: {
        products: [],
        product: '',
        cart: JSON.parse(localStorage.getItem("cart")) || [],
        cartCount: 0,
        categories: [],
        searchProducts: []
    },

    getters: {
        getallProducts(state) {
            return state.products
        },
        getSingleProductData(state) {
            return state.product
        },
        getAllcartItem(state) {
            return state.cart
        },
        getCArtLen(state) {
            return state.cart.length
        },
        getTotalCArt(state) {
            let todal = 0;
            state.cart.forEach(item => {
                todal += item.qty * item.product.price
            });
            return todal
        },
        getAllitemFormCategries(state) {
            return state.categories
        },
        getAllserachITems(state) {
            return state.searchProducts
        }
    },

    mutations: {
        DISPLAY_ALLPRODUCT(state, data) {
            state.products = data
        },

        GET_SINGLE_PRODUCT(state, data) {
            state.product = data
        },
        //add product cart with qty
        ADD_PROD_CART(state, { product, qty }) {
            let proditem = state.cart.find(item => {
                return item.product.id === product.id
            })
            if (proditem) {
                proditem.qty += qty
                return
            }
            state.cart.push({ product, qty })
            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        //clear cart
        CLEAR_CART(state) {
            state.cart = []
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        //delte product from cart item
        DELE_PRODUCT_CART(state, product) {
            console.log(product)
            let indexOfpro = state.cart.indexOf(product)
            console.log(indexOfpro)
            if (indexOfpro > -1) {
                let product = state.cart[indexOfpro]
                if (product.qty > 1) {
                    product.qty = product.qty - 1
                } else {
                    state.cart.splice(indexOfpro, 1)
                    localStorage.setItem('cart', JSON.stringify(state.cart))
                }
            }
        },
        //categories
        CATEGORY_DATA(state, data) {
            state.categories = data
        },

        GET_SEARCHDATA(state, serchdata) {
            state.searchProducts = serchdata
        }
    },

    actions: {
        async fetchAllproducts({ commit }) {
            // const respose = await axios.get('https://dummyjson.com/products')
            const respose = await product.allproduct()
            commit("DISPLAY_ALLPRODUCT", respose.data.products)
            console.log(respose.data)
        },

        getSingleproduct({ commit }, id) {
            // axios.get(`https://dummyjson.com/products/${id}`).then(res => {
            //     commit("GET_SINGLE_PRODUCT", res.data)
            // })

            product.getSingleProdustshow(id).then(res => {
                commit("GET_SINGLE_PRODUCT", res.data)
            })
        },

        // add cart item
        addCartProduct({ commit, dispatch }, { product, qty }) {
            //from notifications module
            dispatch('addNotification', {
                type: "success",
                message: "Product has added in Cart."
            }, { root: true })

            commit('ADD_PROD_CART', { product, qty })
            console.log({ product, qty })
        },

        //delete product from cart
        deleCartProduct({ commit, dispatch }, product) {

            //from notifications module noticication
            dispatch('addNotification', {
                type: "danger",
                message: "Product remove from Cart.....!"
            }, { root: true })

            commit('DELE_PRODUCT_CART', product)
        },

        // clear all cart items
        cleatAllCart({ commit, dispatch }) {
            //from notifications module noticication
            dispatch('addNotification', {
                type: "danger",
                message: "All Product remove from Cart......!"
            }, { root: true })
            commit('CLEAR_CART')
        },

        //categories
        getCAtegoriesdata({ commit }, text) {
            //console.log(text)

            // axios.get(`https://dummyjson.com/products/category/${text}`).then(res => {
            //     commit('CATEGORY_DATA', res.data)
            // })

            product.getcategories(text).then(res => {
                commit('CATEGORY_DATA', res.data)
            })
        },

        serchProductsDetails({ commit }, serchdata) {
            console.log(serchdata)
            axios.get(`https://dummyjson.com/products/search?q=${serchdata}`).then(res => {
                commit('GET_SEARCHDATA', res.data)
            }).catch(errr => {
                console.log(errr)
            })
        }
    }

}
