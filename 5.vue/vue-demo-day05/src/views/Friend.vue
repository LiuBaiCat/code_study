<template>
	<div class="friend">
		<p>我的朋友</p>
		<p>我的朋友</p>
		<p>我的朋友</p>
		<p>我的朋友</p>
	</div>
</template>

<script>
	export default {
		name: 'MyFriend',
	}
</script>

<style scoped>
	.friend {
		background-color: yellowgreen;
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