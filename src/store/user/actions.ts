export default {
    'setLoggedIn'(context:any, isLoggedIn:any) {
        context.commit('loggedIn', isLoggedIn)
    },
    'setsUrlAvatar'(context:any, isUrlAvatar:any) {
        context.commit('urlAvatar', isUrlAvatar)
    },
    'setLoading'(context:any, isUrlAvatar:any) {
        context.commit('loading', isUrlAvatar)
    },
};
