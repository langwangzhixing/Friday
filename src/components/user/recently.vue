<template>
	<div class="browse-lyc">
		<div class="browse-top-lyc">
			<span>最近浏览</span>
		</div>
		<ul class="browse-content-lyc">
			<li v-if="show">
				<a href="javascript:void(0)" v-on:click="hide()"><img src="../../img/绿叉.png"/></a>
				<a href="javascript:void(0)"><img src="../../img/car.png"/></a>
				<h3>新西兰佳沛黄金奇异果</h3>
				<p>果肉绵密,花蜜般的甘甜百吃不厌</p>
				<p>
					<span>¥28.80</span>
					<span>¥40.00</span>
				</p>
			</li>
			<li v-if="show">
				<a href="javascript:void(0)" v-on:click="hide()"><img src="../../img/绿叉.png"/></a>
				<a href="javascript:void(0)"><img src="../../img/car.png"/></a>
				<h3>新西兰佳沛黄金奇异果</h3>
				<p>果肉绵密,花蜜般的甘甜百吃不厌</p>
				<p>
					<span>¥28.80</span>
					<span>¥40.00</span>
				</p>
			</li>
			<li>
				<a href="javascript:void(0)"><img src="../../img/绿叉.png"/></a>
				<a href="javascript:void(0)"><img src="../../img/car.png"/></a>
				<h3>新西兰佳沛黄金奇异果</h3>
				<p>果肉绵密,花蜜般的甘甜百吃不厌</p>
				<p>
					<span>¥28.80</span>
					<span>¥40.00</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return{
			show:true,
			}
		},
		methods:{
			hide:function() {
				this.show = false
			}
		}
	}
</script>
<style lang="less" scoped>
	.browse-lyc {
		width: 1083px;
		border: 1px solid #e7e7e7;
		margin-left: 25px;
		margin-bottom: 48px;
		.browse-top-lyc {
			border-bottom:1px solid #e7e7e7; 
			span {
				display: inline-block;
				padding: 20px 21px;
			}
		}
		.browse-content-lyc {
			width: 1021px;
			margin: 0 auto;
			/*border: 1px solid #000;*/
			padding: 0;
			margin: 0;
			margin: 0 auto;
			overflow: hidden;
			margin-top: 22px;
			li {
				width: 306px;
				height: 433px;
				list-style: none;
				float: left;
				position: relative;
				margin-right: 48px;
				margin-bottom: 36px;
				border: 1px solid transparent;
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
					bottom: 21px;
				}
			}
			li:nth-child(1) {
				background: url(../../img/黄金奇异果2.png) no-repeat;
			}
			li:nth-child(2) {
				background: url(../../img/黄金奇异果3.png) no-repeat;
			}
			li:nth-child(3n) {
				background: url(../../img/黄金奇异果2.png) no-repeat;
				margin-right: -54px;
			}
			li:hover {
				border: 1px solid #4b943d;
			}
		}
	}
</style>