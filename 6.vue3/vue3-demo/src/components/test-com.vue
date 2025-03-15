<script setup>
  const count = 999
  const sayHi = () => {
    console.log('hi')
  }
  defineExpose({
    count,
    sayHi
  })
</script>

<template>
  <h3>07-模板引用</h3>
  <div>
    我是用于测试的组件 - {{ count }}
  </div>
</template>
