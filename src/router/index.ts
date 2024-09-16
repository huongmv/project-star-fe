import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from '../store'
import { useCookies } from "vue3-cookies"
import { SETTING_BREAKCRUMB, USER_LOGINED } from '@/const/ConstCookies'
const { cookies } = useCookies()
let routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  // {
	// 	// will match everything
	// 	path: '*',
	// 	component: () => import('../views/404.vue'),
	// },
	{
		path: '/',
		name: 'Home',
		redirect: '/dashboard',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
		meta: {
			requiresAuth: false,
			breadcrumb: [{'key': './', 'value': 'btn.delete'}, {'key': '/favourite', 'value':'btn.create'}, {'key': '', 'value':'btn.update' }]
		  },
	},
	{
		path: '/user-list',
		name: 'Userlist',
		layout: "dashboard",
		component: () => import('../views/user/UserList.vue'),
	},
	{
		path: '/layout',
		name: 'Layout',
        layouts: 'layout',
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/tables',
		name: 'Tables',
		layout: "dashboard",
		component: () => import('../views/Tables.vue'),
	},
	{
		path: '/billing',
		name: 'Billing',
		component: () => import('../views/Billing.vue'),
	},
	{
		path: '/rtl',
		name: 'RTL',
		layout: "dashboard-rtl",
		meta: {
			layoutClass: 'dashboard-rtl',
		},
		component: () => import('../views/RTL.vue'),
	},
	{
		path: '/Profile',
		name: 'Profile',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-profile',
		},
		component: () => import('../views/Profile.vue'),
	},
	{
		path: '/sign-in',
		name: 'Sign-In',
		layout: "dashboard",
		component: () => import('../views/Sign-In.vue'),
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		layout: "dashboard",
		meta: {
			layoutClass: 'layout-sign-up',
		},
		component: () => import('../views/Sign-Up.vue'),
	},
]

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
