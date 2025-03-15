<!-- 加上 setup 允许在 script 中直接试用编写组合式API -->
<!-- <script>
  // setup
  // 1. 执行时机，比beforeCreate还要早
  // 2. setup函数中无法使用this（this 是 undefined）
  // 3. 数据和函数需要return出去，才能在模板中使用
export default {
  setup () {
    // console.log('setup函数')
    const message = 'hello Vue3'
    const logMessage = () => {
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  }
}
</script> -->
<script setup>
const message = 'this is a message'
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>{{ message }}</div>
  <button @click="logMessage">按钮</button>
</template>
