<script setup lang="ts">
	import type { ComponentSize } from 'element-plus'
	import { onBeforeUnmount, onMounted, ref } from 'vue'
	import { useRouter } from 'vue-router'

	const router = useRouter()
	// 表单数据
	const loginForm = ref({
		username: '',
		password: ''
	})

	const rememberMe = ref(false)

	// 自定义验证函数
	const isTrue = (rule : any, value : string, callback : Function) => {
		if (loginForm.value.username !== '114514' || loginForm.value.password !== '114514') {
			callback(new Error('用户名或密码错误'))
		} else {
			callback()
		}
	}

	// 表单验证规则
	const rules = {
		username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
		password: [
			{ required: true, message: '请输入密码', trigger: 'blur' },
			{ validator: isTrue, trigger: 'blur' },
		]
	}

	// 登录处理
	const handleLogin = () => {
		const test : string = '114514'
		// 这里添加登录逻辑
		if (loginForm.value.username !== test || loginForm.value.password !== test) {
			return
			// alert("用户或密码错误!")
		} else {
			// alert("Hello")
			router.push('/home')
		}
	}

	const goToRegister = () => {
		router.push('/register') // 跳转到注册页面
	}

	const goToForgotPassword = () => {
		router.push('/forgot-password') // 跳转到忘记密码页面
	}

	const formSize = ref<ComponentSize>('default')

	import {
		canvasWidth,
		canvasHeight,
		canvas,
		ctx,
		mousePosition,
		initCanvas
	} from '@/utils/background_star.ts';

	onMounted(() => {
		initCanvas();
	});

	// 监听窗口大小变化
	onMounted(() => {
		window.addEventListener('resize', handleResize);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('resize', handleResize);
	});

	function handleResize() {
		canvasWidth.value = window.innerWidth;
		canvasHeight.value = window.innerHeight;
		initCanvas();
	}
</script>

<template>
	<canvas ref="canvas" :width="canvasWidth" :height="canvasHeight" style="z-index: 1;"></canvas>
	<div class="login-container" style="z-index: 9;">
		<!-- 动态背景 -->
		<div class="background"></div>

		<!-- 登录卡片 -->
		<!-- <transition name="fade-up"> -->
		<el-card class="login-box">
			<h1 class="title">欢迎回来!!!!!</h1>
			<el-divider />

			<el-form ref="loginFormRef" style="max-width: 600px" :model="loginForm" :rules="rules" label-width="auto"
				class="demo-loginForm" :size="formSize">
				<!-- 用户名输入 -->
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" placeholder="用户名" size="large" clearable />
				</el-form-item>

				<!-- 密码输入 -->
				<el-form-item prop="password">
					<el-input v-model="loginForm.password" type="password" placeholder="密码" size="large" show-password />
				</el-form-item>

				<!-- 记住我 & 忘记密码 -->
				<div class="flex-between">
					<el-checkbox v-model="rememberMe">记住我</el-checkbox>
					<el-link type="primary" @click="goToForgotPassword">忘记密码?</el-link>
				</div>

				<!-- 登录按钮 -->
				<el-button type="primary" size="large" class="login-btn" @click="handleLogin">
					登录
				</el-button>
			</el-form>
			<el-link type="primary" @click="goToRegister">没有账号? 注册</el-link>
		</el-card>
		<!-- </transition> -->
	</div>
</template>

<style scoped>
	.login-container {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
	}

	.background {
		position: absolute;
		top: -20px;
		left: -20px;
		right: -20px;
		bottom: -20px;
		/* background: rgb(255, 255, 255); */
		filter: blur(8px);
		z-index: 1;
	}

	.login-box {
		width: 400px;
		padding: 40px 30px;
		border-radius: 20px;
		z-index: 2;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(10px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	}

	.title {
		text-align: center;
		color: #2c3e50;
		margin: 0 0 20px;
		font-size: 28px;
		font-weight: 600;
	}

	.flex-between {
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
	}

	.login-btn {
		width: 100%;
		margin-top: 10px;
		font-size: 16px;
		letter-spacing: 2px;
	}

	.oauth-login {
		margin-top: 30px;
	}

	.oauth-buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		margin-top: 20px;
	}

	.github-btn {
		background: #333;
		color: white;
	}

	.wechat-btn {
		background: #07c160;
		color: white;
	}

	/* 动画效果 */
	.fade-up-enter-active {
		transition: all 0.5s ease-out;
	}

	.fade-up-enter-from {
		opacity: 0;
		transform: translateY(30px);
	}

	@media (max-width: 768px) {
		.login-box {
			width: 90%;
			padding: 30px 20px;
		}
	}

	canvas {
		position: fixed;
		top: 0;
		left: 0;
		background: #55aaff;
	}
</style>