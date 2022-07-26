<template>
<div>
    <h1>Todos with Vuex</h1>
    <!-- how to get todos from store 1st way -->
    <!-- <ul>
          <li v-for="todo in $store.state.todos" :key="todo.id">{{todo.title}}</li>
      </ul> -->

    <!-- how to get todos from store 2nd way using computed property -->
    <!-- <ul>
        <li v-for="todo in todos" :key="todo.id">{{todo.title}}</li>
    </ul> -->

    <!-- useing child Component props use -->
    <TodoList :alltodos="todos" />
    <TodoForm />
</div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
import {
    mapState
} from 'vuex'
export default {
    name: "VuexTodos",
    components: {
        TodoList,
        TodoForm
    },

    data() {
        return {

        }
    },

    computed: {
        // todos: function () {
        //     return this.$store.state.todos
        // },   

        //insted of this use Mapstate

        ...mapState({
            todos: "todos"
        })
    }

}
</script>

<style>

</style>
