<template>
	<div class="collect-lyc">
		<div class="collect-top-lyc">
			<span>最近浏览</span>
		</div>
		<ul class="collect-content-lyc">
			<li>
				<a href=""><img src="../../img/绿叉.png"/></a>
				<a href=""><img src="../../img/car.png"/></a>
				<h3>新西兰佳沛黄金奇异果</h3>
				<p>果肉绵密,花蜜般的甘甜百吃不厌</p>
				<p>
					<span>¥28.80</span>
					<span>¥40.00</span>
				</p>
				<em>取消收藏</em>				
			</li>
			<li>
				<a href=""><img src="../../img/绿叉.png"/></a>
				<a href=""><img src="../../img/car.png"/></a>
				<h3>新西兰佳沛黄金奇异果</h3>
				<p>果肉绵密,花蜜般的甘甜百吃不厌</p>
				<p>
					<span>¥28.80</span>
					<span>¥40.00</span>
				</p>
				<em>取消收藏</em>
			</li>
			<li>
				<a href=""><img src="../../img/绿叉.png"/></a>
				<a href=""><img src="../../img/car.png"/></a>
				<h3>新西兰佳沛黄金奇异果</h3>
				<p>果肉绵密,花蜜般的甘甜百吃不厌</p>
				<p>
					<span>¥28.80</span>
					<span>¥40.00</span>
				</p>
				<em>取消收藏</em>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less" scoped>
	.collect-lyc {
		width: 1083px;
		border: 1px solid #e7e7e7;
		margin-left: 25px;
		margin-bottom: 48px;
		.collect-top-lyc {
			border-bottom:1px solid #e7e7e7; 
			span {
				display: inline-block;
				padding: 20px 21px;
			}
		}
		.collect-content-lyc {
			width: 1003px;
			margin: 0 auto;
			/*border: 1px solid #000;*/
			padding: 0;
			margin: 0;
			margin: 0 auto;
			overflow: hidden;
			margin-top: 22px;
			li {
				width: 306px;
				height: 480px;
				list-style: none;
				float: left;
				position: relative;
				margin-right: 43px;
				margin-bottom: 36px;
				h3 {
					font-size: 16px;
					position: absolute;
					top: 300px;
					margin-left: 18px;
				}
				p {
					margin-left: 18px;
				}
				p:nth-of-type(1) {
					font-size: 12px;
					color: #707070;
					position: absolute;
					top: 335px;
				}
				p:nth-of-type(2) {
					position: absolute;
					top: 360px; 
					span:nth-of-type(1) {
						font-size: 20px;
						color: #ff5757;
					}
					span:nth-of-type(2) {
						font-size: 16px;
						color: #707070;
						text-decoration: line-through;
						margin-left: 18px;
					}
				}
				a:nth-of-type(1) {
					position: absolute;
					right: 11px;
					top: 11px;
				}
				a:nth-of-type(2) {
					position: absolute;
					right: 21px;
					bottom: 74px;
				}
				em {
					display: block;
					width: 152px;
					height: 38px;
					font-style: normal;
					font-size: 16px;
					background-color: #4b943d;
					border-radius: 18px;
					line-height: 38px;
					text-align: center;
					color: #fff;
					position: absolute;
					left: 77px;
					bottom: 22px;
					cursor: pointer;
				}
			}
			li:nth-child(1) {
				background: url(../../img/黄金奇异果4.png) no-repeat;
			}
			li:nth-child(2) {
				background: url(../../img/黄金奇异果5.png) no-repeat;
			}
			li:nth-child(3n) {
				background: url(../../img/黄金奇异果4.png) no-repeat;
				margin-right: -48px;
			}
		}
	}
</style>