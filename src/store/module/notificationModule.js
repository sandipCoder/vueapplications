export default {
    state: {
        notifiations: []
    },

    getters: {
        getNotifiacations(state) {
            return state.notifiations
        }
    },

    mutations: {
        PUSH_NOTIFICATION(state, notifiations) {
            state.notifiations.push({
                ...notifiations,
                id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
            })
        },

        REMOVE_NOTIFICATION(state, notifiation) {
           state.notifiations = state.notifiations.filter(notify => {
                return notify.id != notifiation.id
            })
        }
    },

    actions: {
        addNotification({ commit }, notification) {
            commit('PUSH_NOTIFICATION', notification)
        },

        removeNotification({ commit }, notifiation) {
            commit('REMOVE_NOTIFICATION', notifiation)
        }
    }
}