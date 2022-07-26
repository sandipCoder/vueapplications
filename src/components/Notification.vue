<template>
<div>
    <div :class="getCurentClaa" class="alert alert-dismissible fade show" role="alert">
        <strong><i class="fas fa-check"></i></strong>
        {{notifiation.message}}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex'
export default {
    name: "Notification",
    props: ['notifiation'],

    data() {
        return {
            timeout: null
        }
    },

    computed: {
        getCurentClaa() {
            return `alert-${this.notifiation.type}`
        }
    },

    methods: {
        ...mapActions(['removeNotification'])
    },

    created() {
        this.timeout = setTimeout(() => {
            this.removeNotification(this.notifiation)
        }, 2000)

    },

    beforeDestroy(){
        clearTimeout(this.timeout)
    }
}
</script>
