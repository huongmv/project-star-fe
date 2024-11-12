import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useCookies } from "vue3-cookies"
import store from '@/store/index'
import { LANGUAGE } from '@/const/language'
import { USER, TOKEN, SETTING_BREAKCRUMB, USER_RANK } from '@/const/ConstCookies'
import { CHANGE_COUNTRY } from '@/const/store'
import { v4 as uuidv4 } from 'uuid'
import i18n from '../../createI18n'
import commons from '@/const/Common'
const app = createApp({})
app.use(VueAxios, axios)
app.use(i18n)
const service = {
    init() {
        app.axios.defaults.baseURL = process.env.VUE_APP_BASE_API
        app.axios.defaults.headers.common['Content-Type'] = 'application/json'
        app.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        app.axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE'
        app.axios.defaults.headers.common['Access-Control-Max-Age'] = '3600'
        app.axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
        app.axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin'
        let clientMessage = uuidv4()
        app.axios.defaults.headers.common['clientMessageId'] = clientMessage

        const { cookies } = useCookies();
        let lang_cookie = cookies.get(LANGUAGE);
        let user = cookies.get(USER);
        let tokenCookies = cookies.get(TOKEN);
        let breakcrumb = cookies.get(SETTING_BREAKCRUMB)
        if (breakcrumb != null && breakcrumb != 'undefined') {
            store.dispatch('setBreadcrumb', JSON.parse(breakcrumb))
        }
        if (lang_cookie != null) {
            store.commit(CHANGE_COUNTRY, lang_cookie)
        }
        if (user !== null) {
            store.dispatch('setLoggedIn', true)

            let token = JSON.parse(JSON.stringify(user));
            app.axios.defaults.headers.common['access_token'] = token.tokenType + ' ' + token.accessToken;
            app.axios.defaults.headers.common['refresh_token'] = token.refreshToken;
            app.axios.defaults.headers.common['session'] = token.sessionId;
        }

        // let settingNavbarMode = cookies.get(SETTING_NAVBAR_MODE);
        // if (settingNavbarMode !== null) {
        //     store.dispatch('setNavbarVariant', settingNavbarMode)
        // }
        // let settingSidebarMode = cookies.get(SETTING_SIDEBAR_MODE);
        // if (settingSidebarMode !== null) {
        //     store.dispatch('setSidebarSkin', settingSidebarMode)
        // }

        app.axios.interceptors.response.use((response) => {
            return response
        }, async (error) => {
            console.log(error)
            let dataRes = error.response.data
            commons.showAntNotification(dataRes.errors, dataRes.message, 'bottomLeft')
            // store.dispatch('user', false)
            // cookies.remove('user')
            // cookies.remove('isUser')
            // cookies.set(USER_LOGINED, 'false');
            // localStorage.removeItem('user')
            // router.push({ path: '/login' })
            // ElNotification({
            //     title: 'Error',
            //     message: error.config.url,
            //     type: 'error',
            // })
            // show error message from api
            // const { t } = i18n.global
            // let strMsg =  error.response.data.code + ''
            // let strMsgSub = await commons.getSubString(strMsg, 3, strMsg.length)
            // let msg = t('message.'+ strMsgSub)
            // commons.showMsgError(msg)
            //   ElNotification({
            //         title: 'Error',
            //         message: error.response.data.message,
            //         type: 'error',
            //     })

            // if (error.response.status >= 400) {
            //     delete axios.defaults.headers.common['access_token'];
            // }
            // delete axios.defaults.headers.common['access_token'];
            // delete axios.defaults.headers.common['session'];
            // const host = window.location.hostname
            // const DOMAIN_ADMIN = process.env.VUE_APP_DOMAIN_ADMIN
            // if (host === DOMAIN_ADMIN) {
            //     route.push({ name: 'login' })
            // } else {
            //     route.push({ name: 'home' })
            // }
            //remove expired Authorization token from request header
            // delete axios.defaults.headers.common['Authorization']
            // this.$route.push({ name: 'login' })
            // route.push({ name: 'login' })
            // utils.apiError()
        })
    },
    get(resource:any, params:any) {
        return app.axios.get(resource, params).catch(error => {
            // const { cookies } = useCookies();
            // store.dispatch('setLoggedIn', false)
            // cookies.remove('user')
            // cookies.remove('isUser')
            throw error
        })
    },
    post(resource:any, params:any) {
        return app.axios.post(`${resource}`, params).catch(error => {
            // const { cookies } = useCookies();
            // store.dispatch('setLoggedIn', false)
            // cookies.remove('user')
            // cookies.remove('isUser')
            throw error
        })
    },
    postKey(resource:any, params:any) {
         app.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
        return app.axios.post(`${resource}`, params).catch(error => {
            // const { cookies } = useCookies();
            // store.dispatch('setLoggedIn', false)
            // cookies.remove('user')
            // cookies.remove('isUser')
            throw error
        })
    },
    patch(resource:any, params:any) {
        return app.axios.patch(`${resource}`, params).catch(error => {
            // const { cookies } = useCookies();
            // store.dispatch('setLoggedIn', false)
            // cookies.remove('user')
            // cookies.remove('isUser')
            throw error
        })
    },
    getNoParam(resource:any) {
        return app.axios.get(resource).catch(error => {
            throw error
        })
    },
    getFileNoParam(resource:any) {
        app.axios.defaults.responseType = 'blob';
        return app.axios.get(resource).catch(error => {
            // const { cookies } = useCookies();
            // store.dispatch('setLoggedIn', false)
            // cookies.remove('user')
            // cookies.remove('isUser')
            throw error
        })
    },
    postNoParam(resource:any) {
        return app.axios.post(`${resource}`).catch(error => {
            // const { cookies } = useCookies();
            // store.dispatch('setLoggedIn', false)
            // cookies.remove('user')
            // cookies.remove('isUser')
            throw error
        })
    },
    uploadFile(resource:any, params:any) {
        app.axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
        const { cookies } = useCookies();
        let checkVip = cookies.get(USER_RANK)
        if (Number(checkVip) != 9) {
            store.dispatch('setIsVip', true)
            return app.axios.post(`${resource}`, 1111).catch(error => {
                throw error
            })
        } else {
            store.dispatch('setIsVip', false)
            return app.axios.post(`${resource}`, params).catch(error => {
                // store.dispatch('setLoggedIn', false)
                // cookies.remove('user')
                // cookies.remove('isUser')
                throw error
            })
        }

    },
    deleteNoParam(resource:any) {
        return app.axios.delete(`${resource}`).catch(error => {
            // const { cookies } = useCookies();
            // store.dispatch('setLoggedIn', false)
            // cookies.remove('user')
            // cookies.remove('isUser')
            throw error
        })
    }
}
export default service
