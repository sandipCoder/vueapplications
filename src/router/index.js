import Vue from 'vue'
import VueRouter from 'vue-router'

import SigninView from "../views/SigninView.vue"
import SignupView from "../views/SignupView.vue"
import DashBordView from '../views/DashBordView.vue'

import UserView from "../views/UserView.vue"
import SingleUser from "../views/SingleUser.vue"
import AlbumView from "../views/AlbumView.vue"
import TodosView from "../views/TodosView.vue"
import UserUlbum from "../views/UserUlbum.vue"
import UserComments from "../views/UserComments.vue"

import ProductView from "../views/ProductView.vue"
import ProductDescription from "../views/ProductDescription.vue"

import CartView from "../views/CartView.vue"

import AxiosPost from "../views/AxiosPost.vue"
import SinglePost from "../views/SinglePost.vue"

import VuexTodos from "../views/VuexTodos.vue"
import VuejsTodos from "../views/VuejsTodos.vue"

import Notfound from "../views/Notfound.vue"

Vue.use(VueRouter)

// function guest(to, from, next) {

//   if (localStorage.activeUser) {
//     next({ name: "DashBordView" });
//   } else next();
// }

// function guard(to, from, next) {
//   if (localStorage.activeUser) {
//     next();
//   } else next({ name: "signIn" });
// }

const routes = [
  {
    path: "/",
    name: "signUp",
    component: SignupView,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next({ name: "DashBordView" });
      } else next();
    },
  },
  {
    path: "/dashboard",
    name: "DashBordView",
    component: DashBordView,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next();
      } else next({ name: "signIn" });
    },
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SigninView,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next({ name: "DashBordView" });
      } else next();
    },
  },
  {
    path: "/users",
    name: "UserView",
    component: UserView,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next();
      } else next({ name: "signIn" });
    }

  },
  {
    path: "/singleuser/:id",
    name: "SingleUser",
    component: SingleUser,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next();
      } else next({ name: "signIn" });
    },
  },
  {
    path: "/comments/:id",
    name: "UserComments",
    component: UserComments,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next()
      } else {
        next({ name: "signIn" })
      }
    }
  },
  {
    path: "/albums/:id",
    name: "AlbumView",
    component: AlbumView,

    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next();
      } else next({ name: "signIn" });
    },
  },
  {
    path: '/useralbumphoto/:id',
    name: "UserUlbum",
    component: UserUlbum,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next();
      } else next({ name: "signIn" });
    },
  },

  {
    path: "/todos/:id",
    name: "TodosView",
    component: TodosView,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next();
      } else next({ name: "signIn" });
    },
  },
  // prodcts pages
  {
    path: "/products",
    name: "ProductView",
    component: ProductView,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next();
      } else next({ name: "signIn" });
    },
  },
  {
    path: "/productdescription/:id",
    name: "ProductDescription",
    component: ProductDescription,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next();
      } else next({ name: "signIn" });
    },
  },
  {
    path: "/axiospost",
    name: "AxiosPost",
    component: AxiosPost,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next()
      } else {
        next({ name: "signIn" })
      }
    }
  },
  {
    path: "/singlepost/:id",
    name: "SinglePost",
    component: SinglePost,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next()
      } else {
        next({ name: "signIn" })
      }
    }
  },
  {
    path: "/vuextodos",
    name: "VuexTodos",
    component: VuexTodos,
    beforeEnter: function (to, from, next) {
      if (localStorage.activeUser) {
        next()
      } else {
        next({ name: "signIn" })
      }
    }
  },
  {
    path: "/vuejstodos",
    name: "VuejsTodos",
    component: VuejsTodos,
    beforeEnter(to, from, next) {
      if (localStorage.activeUser) {
        next()
      } else {
        next({ name: "signIn" })
      }
    }
  },
  {
    path: "/cart",
    name: "CartView",
    component: CartView,
    beforeEnter(to, from, next) {
      if (localStorage.activeUser) {
        next()
      } else {
        next({ name: "sign" })
      }
    }
  },

  {
    path: '/:Notfound(.*)*',
    component: Notfound
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
})

export default router
