<template>
	<div class="feedback-lyc">
		<div class="feedback-top-lyc">
			<span>意见反馈</span>
		</div>
		<div class="feedback-middle-lyc">
			<textarea placeholder="请输入您的意见,我们将期待与您共同成长"></textarea>
		</div>
		<div class="feedback-bottom-lyc">
			<a href=""><span>取消</span></a>
			<a href=""><span>提交</span></a>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	.feedback-lyc {
		width: 1083px;
		height: 618px;
		border: 1px solid #e7e7e7;
		margin-left: 25px;
		margin-bottom: 48px;
		.feedback-top-lyc {
			border-bottom:1px solid #e7e7e7; 
			span {
				display: inline-block;
				padding: 20px 21px;
			}
		}
		.feedback-middle-lyc {
			textarea {
				width: 974px;
				height: 374px;
				resize: none;
				margin: 39px;
				border: 1px solid #e7e7e7;
				font-size: 16px;
				padding: 10px 15px;
			}
		}
		.feedback-bottom-lyc {
			width: 400px;
			margin: 0 auto;
			a {
				display: inline-block;
				padding: 16px 55px;
				border-radius: 3px;
				font-size: 20px;
				color: #fff;
				
			}
			a:first-child {
				background: #999999;
				float: left;
			}
			a:last-child {
				background: #f08200;
				float: right;
			}
		}
	}
</style>