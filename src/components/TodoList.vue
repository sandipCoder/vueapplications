<template>
<div>
    <p>Completed Todos : {{completedTodos}}</p>

    <p>Pending Todos : {{pendingTodos}}</p>
    <ul>
        <li class="my-3" v-for="(todo,index) in alltodos" :key="index">
            <span :class="{completed : todo.completed}" @dblclick="updateStatus(todo)"> {{todo.title}} </span>
            <button @click="deleteTodo(todo)" class="btn btn-danger btn-sm mx-3"> delete Todo</button></li>
    </ul>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    name: "TodoList",
    props: ['alltodos'],

    computed: {
        // completedTodos() {
        //     return this.$store.getters.completedTodos
        // },
        // pendingTodos() {
        //     return this.$store.getters.pendingTodos
        // }//
        //insted of this use map getters'

        ...mapGetters({
            completedTodos: "completedTodos",
            pendingTodos: "pendingTodos"
        })
    },

    methods: {
        // deleteTodo(todo) {
        //     this.$store.dispatch("deleteTodo", todo)
        // },

        // updateStatus(todo) {
        //     this.$store.dispatch('updateStatus', todo)
        // }

        //insted of this use mapActions

        ...mapActions({
            deleteTodo: "deleteTodo",
            updateStatus: "updateStatus"
        })
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>
