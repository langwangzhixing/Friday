<template>
	<div>
		<cont-nav></cont-nav>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import contNav from 'components/contNav';
	
	export default{
		components:{
			contNav
		}
	}
</script>

<style scoped>
</style>