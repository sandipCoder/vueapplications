<template>
<div>
    <input type="text" name="" id="" v-model="newtodo">
    <button @click="addTodo">Add Todo</button>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: "TodoForm",
    data() {
        return {
            newtodo: ''
        }
    },

    methods: {
        // addTodos() {
        //     this.$store.dispatch('addNewTodo', this.newtodo)
        //     this.newtodo=''
        // }

        ...mapActions({
            addNewTodo: "addNewTodo"
        }),

        addTodo() {
            this.addNewTodo(this.newtodo)
            this.newtodo = ''
        }

    }

}
</script>

<style>

</style>
