<script setup>
  import BottomCom from '@/components/bottom-com.vue'
</script>

<template>
  <div class="center">
    <h2>我是中间组件</h2>
    <h4>08-provide和inject</h4>
    <BottomCom></BottomCom>
  </div>
</template>

<style scoped>
  .center {
    border: 1px solid red;
  }
</style>
