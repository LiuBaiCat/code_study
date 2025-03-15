<script setup>
import Son1com from "@/components/Son1com.vue";
import Son2com from "@/components/Son2com.vue";
import { useCounterStore } from "@/store/counter";
import { useChannelStore } from "@/store/channel";
const counterStore = useCounterStore();
const channelStore = useChannelStore();
// console.log(counterStore)
</script>

<template>
  <div>
    <h3>App.vue根组件 - {{ counterStore.count }} - {{ counterStore.msg }}</h3>
    <Son1com></Son1com>
    <Son2com></Son2com>
  </div>
  <hr />
  <button @click="channelStore.getChannelList">获取频道数据</button>
  <ul>
    <li v-for="item in channelStore.channelList" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped>
</style>
