<script setup>
  // 子组件
  // 注意: 由于写了 setup，所以无法直接配置 props 选项
  // 所以,此处需要借助于 “编译器宏” 函数接收子组件传递的数据
  const props = defineProps({
    car: String,
    money: Number
  })
  console.log(props.car)
  console.log(props.money)

  // 子组件向父组件传递数据
  const emit = defineEmits(['changeMoney'])
  const buy = () => {
    // 需要 emit 触发事件
    emit('changeMoney', props.money - 10)
  }
</script>

<template>
  <h3>06-父子通讯</h3>
  <!-- 对于props传递过来的数据，模板中可以直接使用 -->
  <div class="son">
    我是子组件 - {{ car }} - {{ money }}
    <button @click="buy">花钱</button>
  </div>
</template>

<style scoped>
  .son {
    border: 1px solid #000;
    padding: 30px;
  }
</style>
