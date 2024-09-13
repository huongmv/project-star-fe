import mutations from './mutations';
import actions from './actions';
import getters from './getters';
const userStore = {
    state: {
        isLoggedIn: false,
        isUrlAvatar: '',
        isLoading: false,
    },
    mutations,
    actions,
    getters
};

export default userStore;
