<template>
	<div>
		<h1 v-color="color1">指令的值1测试</h1>
		<h1 v-color="color2">指令的值2测试</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				color1: 'red',
				color2: 'yellowgreen'
			}
		},
		directives: {
			color: {
				// 元素被插入到页面中时调用
				inserted(el, binding) {
					el.style.color = binding.value;
				},
				// 元素更新时调用
				update(el, binding) {
					console.log("指令的值被修改了");
					el.style.color = binding.value;
				}
			},
		}
	}
</script>

<style>

</style>