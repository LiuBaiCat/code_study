import Vue from 'vue'
import App from './App.vue'
// 路由的使用步骤 5+2
// 1. 下载路由3.6.5
// 2. 引入路由
import VueRouter from 'vue-router'
// 3. 安装注册Vue.use
Vue.use(VueRouter) // VueRouter插件初始化
// 4. 创建路由对象
const router = new VueRouter({
	// routes:路由规则
	routes: [{
			path: '/find',
			component: Find,
		},
		{
			path: '/my',
			component: My,
		},
		{
			path: '/friend',
			component: Friend,
		}
	]
})
// 5.注入到new vue中，建立关联

// 2个核心步骤
// 1. 建组件(views目录)，配规则
// 2. 准路导航链接，配置路由出口(匹配的组件展示的位置)
import Find from './views/Find.vue'
import My from './views/My.vue'
import Friend from './views/Friend.vue'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router: router,
	//相同时可以简写成'router,'
}).$mount('#app')