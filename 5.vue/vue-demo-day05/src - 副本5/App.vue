<template>
	<div>
		<MyDialog>
			<!-- 一段内容 -->
			<template v-slot:head>
				<!-- <p>我是插槽</p> -->
				<h3>友情提示</h3>
				<span class="close">✖️</span>
			</template>
			<!-- 具名插槽 -->
			<template #content>
				<!-- <p>我是插槽</p> -->
			</template>
			<template #footer>
				<!-- <p>我是尾部插槽</p> -->
				<button>确定</button>
				<button>取消</button>
			</template>
		</MyDialog>
	</div>
</template>

<script>
	import MyDialog from './components/MyDialog.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			MyDialog
		}
	}
</script>

<style>
	body {
		background-color: #b3b3b3;
	}
</style>