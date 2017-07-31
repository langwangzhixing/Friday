<template>
	<b class="bullet">{{tanMsg}}</b>
</template>

<script>
	export default{
		props:['tanMsg']
	}
</script>

<style scoped>
.bullet{
	border: 1px solid #ccc;
	padding: 15px 30px;
	color: white;
	font-size: 16px;
	background: rgba(0, 0, 0, 0.5);
}
</style>