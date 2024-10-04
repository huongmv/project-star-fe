import { ref } from "vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import store from '../store'
import { useCookies } from "vue3-cookies"
import { SETTING_BREAKCRUMB, USER_LOGINED } from '@/const/ConstCookies'
import { V1_ROUTER_LIST_ALL } from "@/api/const/router"
import { apiPost, apiGetNoParam, apiGet } from "@/api/index"

const _ = require('lodash');

const { cookies } = useCookies()
let routes: any = []
await apiGetNoParam(V1_ROUTER_LIST_ALL).then((res) => {
	let response: any = res;
	let value = response.data.data;
	for (let i = 0; i < value.length; i++) {
		let item = value[i]
		let dataRouter = {
			path: item.path,
			name: item.name,
			redirect: item.redirect,
			layout: item.layout,
			component: () => import('../views' +`${item.component}`),
			meta: item.meta,
		}
		Object.fromEntries(Object.entries(dataRouter).filter(([key, value]) => value !== null));
		let other = _.omitBy(dataRouter, (v: any) => v == null);
		console.log(other)
		routes.push(other)
	}
});

	
// let routes = JSON.parse(JSON.stringify(routesRes))

// let routes = [
// 	{
// 		path: '/',
// 		name: 'Home',
// 		redirect: '/dashboard',
// 	},
// 	{
// 		path: '/dashboard',
// 		name: 'Dashboard',
// 		component: () => import('../views/Dashboard.vue'),
// 		meta: {
// 			layout: "dashboard",
// 			requiresAuth: false,
// 			breadcrumb: [{'key': './', 'value': 'btn.delete'}, {'key': '/favourite', 'value':'btn.create'}, {'key': '', 'value':'btn.update' }]
// 		  },
// 	},
// 	{
// 		path: '/chart',
// 		name: 'Chart',
// 		component: () => import('../views/admin/dasboard/Dasboard.vue'),
// 		meta: {
// 			layout: "dashboard",
// 			requiresAuth: false,
// 			breadcrumb: [{'key': './', 'value': 'btn.delete'}, {'key': '/favourite', 'value':'btn.create'}, {'key': '', 'value':'btn.update' }]
// 		  },
// 	},
// 	{
// 		path: '/user-list',
// 		name: 'Userlist',
// 		layout: "dashboard",
// 		component: () => import('../views/client/user/UserList.vue'),
// 		meta: {
// 			layout: "dashboard",
// 			requiresAuth: false,
// 			breadcrumb: [{'key': './', 'value': 'btn.delete'}, {'key': '/favourite', 'value':'btn.create'}, {'key': '', 'value':'btn.update' }]
// 		  },
// 	},
// 	{
// 		path: '/layout',
// 		name: 'Layout',
//         layouts: 'layout',
// 		component: () => import('../views/Layout.vue'),
// 		meta: {
// 			layout: "dashboard",
// 			requiresAuth: false,
// 			breadcrumb: [{'key': './', 'value': 'btn.delete'}, {'key': '/favourite', 'value':'btn.create'}, {'key': '', 'value':'btn.update' }]
// 		  },
// 	},
// 	{
// 		path: '/tables',
// 		name: 'Tables',
// 		layout: "dashboard",
// 		component: () => import('../views/Tables.vue'),
// 		meta: {
// 			layout: "dashboard",
// 			requiresAuth: false,
// 			breadcrumb: [{'key': './', 'value': 'btn.delete'}, {'key': '/favourite', 'value':'btn.create'}, {'key': '', 'value':'btn.update' }]
// 		  },
// 	},
// 	{
// 		path: '/billing',
// 		name: 'Billing',
// 		component: () => import('../views/Billing.vue'),
// 		meta: {
// 			layout: "default",
// 			requiresAuth: false,
// 			breadcrumb: [{'key': './', 'value': 'btn.delete'}, {'key': '/favourite', 'value':'btn.create'}, {'key': '', 'value':'btn.update' }]
// 		  },
// 	},
// 	{
// 		path: '/rtl',
// 		name: 'RTL',
// 		layout: "dashboard-rtl",
// 		meta: {
// 			layoutClass: 'dashboard-rtl',
// 		},
// 		component: () => import('../views/RTL.vue'),
// 	},
// 	{
// 		path: '/Profile',
// 		name: 'Profile',
// 		layout: "dashboard",
// 		meta: {
// 			layoutClass: 'layout-profile',
// 		},
// 		component: () => import('../views/Profile.vue'),
// 	},
// 	{
// 		path: '/sign-in',
// 		name: 'Sign-In',
// 		layout: "dashboard",
// 		component: () => import('../views/Sign-In.vue'),
// 		meta: {
// 			layout: "layout-sign-in",
// 			requiresAuth: false,
// 			breadcrumb: [{'key': './', 'value': 'btn.delete'}, {'key': '/favourite', 'value':'btn.create'}, {'key': '', 'value':'btn.update' }]
// 		  },
// 	},
// 	{
// 		path: '/sign-up',
// 		name: 'Sign-Up',
// 		layout: "dashboard",
// 		meta: {
// 			layoutClass: 'layout-sign-up',
// 		},
// 		component: () => import('../views/Sign-Up.vue'),
// 	},
// ]
console.log('routes111111111111')
console.log(routes)

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// function addLayoutToRoute( route:any, parentLayout = "default" )
// {
// 	route.meta = route.meta || {} ;
// 	route.meta.layout = route.layout || parentLayout ;

// 	if( route.children )
// 	{
// 		route.children = route.children.map( ( childRoute:any ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
// 	}
// 	return route ;
// }

// routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

// const router = new VueRouter({
// 	mode: 'hash',
// 	base: process.env.BASE_URL,
// 	routes,
// 	scrollBehavior (to:any, from:any, savedPosition:any) {
// 		if ( to.hash ) {
// 			return {
// 				selector: to.hash,
// 				behavior: 'smooth',
// 			}
// 		}
// 		return {
// 			x: 0,
// 			y: 0,
// 			behavior: 'smooth',
// 		}
// 	}
// })

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	let isLoginer = cookies.get(USER_LOGINED)
	// let isLoginer = store.getters.isLoggedIn
	store.dispatch('setBreadcrumb', to.meta.breadcrumb)
	console.log('to.meta.layoutClass')
	console.log(to.meta.layoutClass)
	store.dispatch('setLayoutClass', to.meta.layoutClass)
	cookies.set(SETTING_BREAKCRUMB, JSON.stringify(to.meta.breadcrumb));
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (isLoginer === 'true') {
			next()
			return
		} else {
			next('/')
		}
	} else {
		next()
	}
});

export default router
