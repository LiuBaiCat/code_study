<template>
  <div>BaseOne</div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 
1.默认的style样式，会作用于全局 → 全局样式
2.加上scoped属性的style样式，只会作用于当前组件 → 局部样式
    组件应该有着自己独立的样式，推荐加上scoped(原理)
---------------------------------------------------
scoped原理:
1.给当前组件模板的所有元素，都会被添加上一个自定义属性d
    ata-v-hash值
    data-v-5f6a9d56 区分开不同的组件
2.css选择器后面，被自动处理，添加上了属性选择器 
    data[v-5f6a9d56]
*/
div {
  border: 3px solid blue;
  margin: 30px;
}
</style>