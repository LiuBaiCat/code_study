<script setup>
  // 父传子
  // 1. 给父传子，添加属性的方式传值
  // 2. 在子组件，通过props接收

  // 子传父
  // 1. 在子组件内部，emit触发事件 (编译器宏获取)
  // 2. 在父组件，通过 @ 监听子组件触发的事件


  // 局部组件(导入进来就能用)
  import {
    ref
  } from 'vue'
  import SonCom from '@/components/son-com.vue'

  const money = ref(100)
  const getMoney = () => {
    money.value += 100
  }
  const changeFn = (newMoney) => {
    money.value = newMoney
  }
</script>

<template>
  <h3>
    父组件 - {{ money }}
    <button @click="getMoney">挣钱</button>
  </h3>
  <!-- 给子组件，添加属性的方式传值 -->
  <SonCom car="宝马车" :money="money" @changeMoney="changeFn"></SonCom>
</template>
