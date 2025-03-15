<template>
	<div>
		<!-- 2. 在使用组件时，组件标签内填入内容 -->
		<MyDialog>
			<div>你确认要删除嘛？</div>
		</MyDialog>
		<MyDialog>
			<!-- <p>你确认要退出嘛？</p> -->
		</MyDialog>
	</div>
</template>

<script>
	import MyDialog from "./components/MyDialog.vue"
	export default {
		data() {
			return {}
		},
		components: {
			MyDialog,
		},
	}
</script>

<style>
	body {
		background-color: #b3b3b3;
	}
</style>