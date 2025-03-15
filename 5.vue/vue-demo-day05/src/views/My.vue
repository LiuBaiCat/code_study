<template>
	<div class="my">
		<p>我的音乐</p>
		<p>我的音乐</p>
		<p>我的音乐</p>
		<p>我的音乐</p>
	</div>
</template>

<script>
	export default {
		name: 'MyMusic',
	}
</script>

<style scoped>
	.my {
		/* border-collapse: collapse; */
		background-color: #70b8ff;
		border: 1px solid red;
		padding: 10px;
		/* margin: 10px; */
		text-align: center;
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		color: black;
		width: 100%;
		height: 100%;
	}

	p:hover {
		cursor: pointer;
		background-color: rgb(255, 255, 255, 0.4);
	}
</style>