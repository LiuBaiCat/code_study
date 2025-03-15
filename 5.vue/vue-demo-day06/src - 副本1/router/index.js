import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/NotFound'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
	routes: [
		// { path: '/home', component: Home },
		// { path: '/search', component: Search }
		{
			// 重定向
			path: '/',
			redirect: '/home'
		}, {
			path: '/home',
			component: Home
		},
		{
			name: 'search',
			path: '/search/:words?',
			component: Search
		},
		{
			path: '*',
			component: NotFound
		}
	],
	mode: 'history' // 去掉路径中的#号
})

export default router