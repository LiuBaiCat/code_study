<script setup>
  // reactive: 接受一个对象类型的数据，返回一个响应式的对象
  // 如果是简单写法呢？
  // import { reactive } from 'vue'

  // const state = reactive({
  //   count: 100
  // })
  // const setCount = () => {
  //   state.count++
  // }
  // 2.ref: 接受一个简单或复杂类型的数据，返回一个响应式的对象
  // 本质: 是将传入的数据的基础上，外层包装成一个带有value属性的对象，包成了复杂类型
  // 底层，包成复杂类型之后，再借助 reactive 实现的响应式
  // 注意点:
  // 1. 脚本中访问数据，需要通过 .value 的方式访问
  // 2. template模板中访问数据，不需要加 .value

  // 推荐: 以后声明数据，统一(优先)使用 ref
  import { ref } from 'vue'
  const count = ref(0)
  console.log(count.value)
  const setCount = () => {
    count.value++
  }
</script>

<template>
  <div>
    <!--    <div>{{ state.count }}</div>
    <button @click="setCount">+1</button> -->
    <div>{{ count }}</div>
    <button @click="setCount">+1</button>
  </div>
</template>
