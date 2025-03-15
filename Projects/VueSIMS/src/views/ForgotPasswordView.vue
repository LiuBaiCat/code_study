<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 表单数据
const forgotPasswordForm = ref({
  email: ''
})

// 表单验证规则
const rules = {
  email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }]
}

// 处理忘记密码
const handleForgotPassword = () => {
  // 这里添加忘记密码逻辑
  console.log(forgotPasswordForm.value)
}

const goToLogin = () => {
  router.push('/login') // 跳转到登录页面
}
</script>

<template>
  <div class="forgot-password-container">
    <el-card class="forgot-password-box">
      <h1 class="title">忘记密码</h1>
      <el-divider />
      
      <el-form
        ref="forgotPasswordFormRef"
        :model="forgotPasswordForm"
        :rules="rules"
        label-width="auto"
        class="demo-forgotPasswordForm"
      >
        <!-- 邮箱输入 -->
        <el-form-item prop="email">
          <el-input v-model="forgotPasswordForm.email" placeholder="请输入注册邮箱" size="large" clearable />
        </el-form-item>

        <!-- 提交按钮 -->
        <el-button 
          type="primary" 
          size="large" 
          class="forgot-password-btn"
          @click="handleForgotPassword"
        >
          提交
        </el-button>
      </el-form>
      <el-link type="primary" @click="goToLogin">返回登录</el-link>
    </el-card>
  </div>
</template>

<style scoped>
.forgot-password-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.forgot-password-box {
  width: 400px;
  padding: 40px 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #2c3e50;
  margin: 0 0 20px;
  font-size: 28px;
  font-weight: 600;
}

.forgot-password-btn {
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
}
</style>
