import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'

import './scss/app.scss';

const app = createApp(App)

app.component("layout-default", DefaultLayout);
app.component("layout-dashboard", DashboardLayout);
app.component("layout-dashboard-rtl", DashboardRTLLayout);

app
.use(Antd)
.use(store)
.use(router)
.mount('#app')
