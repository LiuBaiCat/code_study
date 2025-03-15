<script setup>
  import { inject } from 'vue'
  const themeColor = inject('theme-color')
  const count = inject('count')

  const changeCount = inject('changeCount')
  const clickFn = () => {
    changeCount(1000)
  }
</script>

<template>
  <div>
    <h3>我是底层组件 - {{ themeColor }} - {{ count }}</h3>
    <h5>08-provide和inject</h5>
    <button @click="clickFn">更新count</button>
  </div>
</template>
<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
