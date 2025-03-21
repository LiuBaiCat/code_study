import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: 'login'
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/LoginView.vue'),
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('@/views/RegisterView.vue'),
		},
		{
			path: '/forgot-password',
			name: 'forgot-password',
			component: () => import('@/views/ForgotPasswordView.vue'),
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/home/index.vue'),
		},
		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (About.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () => import('../views/AboutView.vue'),
		// },
	],
})

export default router