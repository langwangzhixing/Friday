<template>
	<div id="nofind">
		<div class="error-lyc">
			<img src="../img/404.png"/>
			<img src="../img/sorry.png"/>
			<p>您要查看的网址可能已被删除、名称已被更改、或者暂时不可用</p>
			<span class="return-page-lyc">返回上一页面</span>
			<span class="return-home-lyc">返回网站首页</span>
		</div>
	</div>
</template>

<script>
	import router from '../router';
	export default{}
</script>

<style scoped>
	.error-lyc {
	width: 760px;
	margin: 230px auto;
	text-align: center;
}
.error-lyc img:nth-of-type(1){
	width: 510px;
}
.error-lyc img:nth-of-type(2){
	margin: 60px 0;
}
.error-lyc p {
	font-size: 22px;
	font-weight: bold;
	color: #666;
	display: flex;
	justify-content: space-around;
	margin-top: 20px 0;
}
.error-lyc span {
	display: inline-block;
	margin-top: 100px;
	margin-left: 52px;
	margin-right: 52px;
	padding: 5px 15px;
	border-radius: 5px;
	color: #fff;
	font-size: 20px;
}
.return-page-lyc {
	background-color: rgb(240,130,0);
}
.return-home-lyc {
	background-color: rgb(73,142,61);
}
</style>