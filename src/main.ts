import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import ElementPlus from 'element-plus'
import 'ant-design-vue/dist/reset.css';
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import i18n from '../createI18n'
import VueCookies from 'vue3-cookies'
import { useCookies } from "vue3-cookies"
/** CSS */
import './scss/app.scss'
import './assets/css/dark.css'
import './assets/css/adminlte.css'
import './assets/fontawesome-free5154/css/all.min.css'
const { cookies } = useCookies()
const app = createApp(App)
app.component("layout-default", DefaultLayout);
app.component("layout-dashboard", DashboardLayout);
app.component("layout-dashboard-rtl", DashboardRTLLayout);
app.config.globalProperties._cookies = cookies
app.config.globalProperties._lenguage = i18n
app.config.globalProperties._router = router
app.use(VueCookies, {
    expireTimes: "8h"
});
app.use(Antd)
.use(store)
.use(router)
.use(i18n)
.use(ElementPlus)
.mount('#app')
