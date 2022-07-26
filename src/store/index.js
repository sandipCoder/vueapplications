import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import productmodule from "./module/productmodule"
import notificationModule from "./module/notificationModule"
Vue.use(Vuex, axios)

export default new Vuex.Store({
  
  state: {
    todos: [
      {
        title: "Todo 1",
        completed: false
      },
      {
        title: "Todo 2",
        completed: false
      },
      {
        title: "Todo 3",
        completed: false
      },

    ],

  },

  //getters behave like computed proper alway return something
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === true
      }).length
    },
    pendingTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === false
      }).length
    }
  },

  //mutation update the state
  mutations: {
    NEW_TODO(state, todoItem) {
      state.todos.push({ title: todoItem, completed: false })
    },
    DELETE_TODO(state, todo) {
      let inddata = state.todos.indexOf(todo)
      console.log(inddata)
      state.todos.splice(inddata, 1)
    },
    UPDATE_STATUS(state, todo) {
      todo.completed = !todo.completed
    }
  },

  //commit the muttation here
  actions: {
    addNewTodo({ commit }, todoItem) {
      commit('NEW_TODO', todoItem)

    },

    deleteTodo({ commit }, todo) {
      commit('DELETE_TODO', todo)
    },

    updateStatus({ commit }, todo) {
      commit("UPDATE_STATUS", todo)
    }
  },
  //module add diffrent modules here

  modules: {
    productmodule,
    notificationModule
  }

})
