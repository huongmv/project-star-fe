import { createStore } from 'vuex'
import commonStore from './common/index'
import userStore from './user/index'
export default createStore({
  modules: {
    commonStore,
    userStore
  }
})
