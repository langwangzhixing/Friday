<template>
	<div class="tlw-person-box">
		<div class="tlw-integral-order">
			<div class="tlw-integralOrder-top">
				<h5>积分订单</h5>
				<span>当前积分：<em>240</em></span>
			</div>

			<div class="tlw-myIntegralOrder">
				<div class="tlw-Order-top">
					<p>订单号：150319690000</p>
					<p>下单日期：2017.06.30 18:06:54</p>
					<span>订单状态：<em>已完成</em></span>
				</div>
				<div class="tlw-Order-bottom">
					<div class="tlw-left-contens">
						<img src="../../images/20.png" />
						<p>云南昭通丑苹果</p>
						<span>6个装</span>
						<em>x 1</em>
					</div>
					<div class="tlw-center-contents">
						<p>积分：58</p>
					</div>
					<div class="tlw-right-contents">
						<p>查看详情</p>
						<button>删除订单</button>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {

	}
</script>
<style lang="less" scoped>
	.tlw-person-box {
		.tlw-integral-order {
			width: 1083px;
			border: 1px solid #CCCCCC;
			margin-left: 25px;
			.tlw-integralOrder-top {
				padding: 15px;
				overflow: hidden;
				border-bottom: 1px solid #cccccc;
				h5 {
					float: left;
				}
				span {
					float: right;
					em {
						color: #f39b33;
					}
				}
			}
			.tlw-myIntegralOrder {
				border: 1px solid #CCCCCC;
				margin: 20px 20px;
				.tlw-Order-top {
					height: 46px;
					font-size: 17px;
					font-weight: 200;
					background: #f2f2f2;
					display: flex;
					flex-direction: row;
					align-items: center;
					color: black;
					padding: 0 20px;
					position: relative;
					p:nth-of-type(2) {
						position: absolute;
						left: 250px;
					}
					span {
						position: absolute;
						right: 20px;
						em {
							color: #f08200;
						}
					}
				}
				.tlw-Order-bottom {
					position: relative;
					.tlw-left-contens {
						width: 698px;
						height: 120px;
						display: flex;
						flex-direction: row;
						align-items: center;
						position: relative;
						img {
							position: absolute;
							left: 20px;
						}
						p {
							position: absolute;
							left: 120px;
						}
						span {
							position: absolute;
							left: 350px;
						}
						em {
							position: absolute;
							right: 120px;
						}
					}
					.tlw-center-contents {
						width: 206px;
						height: 120px;
						line-height: 120px;
						font-size: 15px;
						font-weight: 200;
						text-align: center;
						border-left: 1px solid #cccccc;
						position: absolute;
						right: 134px;
						top: 0;
					}
					.tlw-right-contents {
						width: 136px;
						height: 120px;
						text-align: center;
						border-left: 1px solid #cccccc;
						position: absolute;
						top: 0;
						right: 0;
						p {
							color: #63a257;
							text-decoration: underline;
							cursor: pointer;
							margin-top: 30px;
						}
						button {
							width: 90px;
							height: 30px;
							background: #f08200;
							color: white;
							font-size: 14px;
							font-weight: 100;
							border: none;
							border-radius: 6px;
							cursor: pointer;
							margin-top: 20px;
						}
					}
				}
			}
		}
	}
</style>