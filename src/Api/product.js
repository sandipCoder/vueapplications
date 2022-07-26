
import Api from "./api";

export default {
    allproduct() {
        return Api.get('products')
    },

    getSingleProdustshow(id) {
        return Api.get(`products/${id}`)
    },

    getcategories(text) {
        return Api.get(`products/category/${text}`)
    }
}