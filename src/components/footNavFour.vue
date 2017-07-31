<template>
	<div>
		<bread-nav></bread-nav>
		<!--基地直供-->
		<div class="base-lyc">
			<div class="base-top-lyc">
				<h2>基地直供</h2>
				<span>分类 网站中部文章</span>
				<span>日期:2016-11-03 00:00:00</span>
			</div>
			<div class="base-middle-lyc">
				<span>基地直供</span>
			</div>
		</div>
	</div>
</template>

<script>
	import breadNav from './breadNav';
	export default{
		components:{breadNav}
	}
</script>

<style lang="less" scoped>
	/*h1{
		font-size: 30px;
		padding-left: 20px;
	}*/
	.base-lyc {
		width: 1280px;
		height: 608px;
		border: 1px solid #e3e3e3;
		margin: 0 auto;
		margin-top: 19px;
		margin-bottom: 43px;
		.base-top-lyc {
			width: 420px;
			margin: 0 auto;
			h2 {
				text-align: center;
				font-size: 24px;
				color: #619d57;
				padding-top: 60px;
				padding-bottom: 30px;
			}
			span {
				font-size: 14px;
				color: #c1c0c1;
			}
			span:first-child {
				float: left;
			}
			span:last-child {
				float: right;
			}
		}
		.base-middle-lyc {
			margin-top: 37px;
			span {
				margin-left: 34px;
			}
		}
	}
</style>