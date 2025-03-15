<template>
	<div>
		<h1>自定义指令</h1>
		<input v-focus ref="inp" type="text">
	</div>
</template>

<script>
	export default {
		// mounted() {
		// 	this.$refs.inp.focus()
		// }

		// 2.局部注册指令
		directives: {
			focus: {
				inserted(el) {
					el.focus()
				}
			}
		}
	}
</script>

<style>

</style>