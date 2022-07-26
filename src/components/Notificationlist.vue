<template>
<div class="Notification-list">
    <Notification v-for="notifiation in getNotifiacations" :key="notifiation.id" :notifiation="notifiation"/>
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Notification from './Notification.vue'
export default {
    name: "Notificationlist",
    components: {
        Notification
    },

    computed:{
        ...mapState(['notifiations']),
        ...mapGetters(['getNotifiacations'])
    },
    

}
</script>

<style scoped>
.Notification-list {
    width: 340px;
    position: fixed;
    right: 0;
    bottom:10px;
    margin-right: 20px;
}
</style>
