<template>
<div id="app">
    <div class="container-fluid">
        <div class="row">
            <HeaderView />
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <router-view />
            </div>
        </div>
        <Notificationlist />
    </div>

</div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue"
import Notificationlist from "./components/Notificationlist.vue"
export default {
    name: "App",
    components: {
        HeaderView,
        Notificationlist
    }
}
</script>

<style>
body {
    background: #eee;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

.nav-item a.router-link-exact-active {
    color: #42b983;
}
</style>
