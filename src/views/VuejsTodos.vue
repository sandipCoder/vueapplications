<template>
<div>
    <div class="container mt-5">
        <div class="row justify-content-center">

            <div class="col-md-4">
                <h1>Vue JS Todos</h1>
                <div class="input-group mb-3 mt-3">
                    <input type="text" class="form-control" v-model="newtodo" placeholder="Add todo">
                    <button class="input-group-text btn btn-success" @click="addTodo">Add Todo</button>
                </div>

                <ul class="list-group list-group-flush text-left">
                    <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(todo,index) in todos" :key="index">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold " :class="[todo.completed ? 'text-success' : 'text-danger' ]" @click="changeStatus(todo)"> {{todo.title}} </div>
                            {{todo.completed}}
                        </div>
                        <button class="badge rounded-pill btn btn-danger" @click="deleteTodo(todo)"> Delete</button>
                    </li>
                </ul>
                <hr>
                <div class="d-flex justify-content-between">
                    <span>Completed Todos: {{completedTodos}}</span>
                    <span>Pending Todos: {{pendingTodods}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "VuejsTodos",
    data() {
        return {
            newtodo: "",
            todos: [{
                    title: "todos 1",
                    completed: false
                },
                {
                    title: "todos 2",
                    completed: false
                },
                {
                    title: "todos 3",
                    completed: false
                }
            ]
        }
    },

    computed: {
        completedTodos() {
            return this.todos.filter(item => {
                return item.completed === true
            }).length
        },

        pendingTodods() {
            return this.todos.filter(item => {
                return item.completed === false
            }).length
        }

    },
    methods: {
        addTodo() {
            if (this.newtodo === '') {
                alert("please provide valid todo")
            } else {
                this.todos.push({
                    title: this.newtodo,
                    completed: false
                })
                this.newtodo = ""
            }
        },

        deleteTodo(todo) {
            let indexof = this.todos.indexOf(todo)
            this.todos.splice(indexof, 1)
        },

        changeStatus(todo) {
            todo.completed = !todo.completed
        }

    }
}
</script>

<style>

</style>
