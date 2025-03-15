<script setup>
  import CenterCom from '@/components/center-com.vue'
  import { provide, ref } from 'vue'
  // 1. 跨层传递普通数据
  provide('theme-color', 'pink')
  // 2. 跨层传递响应式数据
  const count = ref(100)
  provide('count', count)
  setTimeout(() => {
    count.value = 500
  }, 2000)

  // 3. 跨层传递函数
  // const changeCount = () => {
  //   count.value++
  // }
  provide('changeCount', (newCount) => {
    count.value = newCount
  })
</script>

<template>
  <div class="top">
    <h1>我是顶层组件</h1>
    <CenterCom></CenterCom>
  </div>
</template>
<style scoped>
  .top {
    border: 1px solid greenyellow;
  }
</style>
