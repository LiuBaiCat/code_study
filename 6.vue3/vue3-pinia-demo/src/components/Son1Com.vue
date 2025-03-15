<script setup>
  import { useCounterStore } from '@/store/counter'
  const counterStore = useCounterStore()
</script>

<template>
  <div>
    我是Son1
    - {{ counterStore.count }} - {{ counterStore.doubleCount }}
    - <button @click="counterStore.addCount">+</button>
  </div>
</template>

<style scoped>

</style>
