<template>
	<div class="tlw-person-box">
		<div class="tlw-person-order">
			<h5>我的订单</h5>
			<ul>
				<li><span class="tlw-all-active">全部</span>|</li>
				<li><span>待付款</span>|</li>
				<li><span>待发货</span>|</li>
				<li><span>待收货</span>|</li>
				<li><span>待评价</span>|</li>
				<li><span>退款/售后</span>|</li>
				<li><span>已完成/关闭</span>|</li>
			</ul>
			<a href="###">订单回收站</a>
			<div class="tlw-person-details">
				<div class="tlw-details-top">
					<p>订单号：150319690000</p>
					<p>下单日期：2017.06.30 18:06:54</p>
					<strong>爱果果水果店</strong>
					<span>订单状态：<em>关闭</em></span>
				</div>
				<div class="tlw-details-bottom">
					<div class="tlw-left-top">
						<img src="../../images/20.png"/>
						<p>云南昭通丑苹果</p>
						<span>6个装</span>
						<em>￥35.0 x 1</em>
					</div>
					<div class="tlw-left-top">
						<img src="../../images/20.png"/>
						<p>云南昭通丑苹果</p>
						<span>6个装</span>
						<em>￥35.0 x 1</em>
					</div>
					<div class="tlw-center-content">
						<p>店铺合计：￥105.0</p>
						<span>（含运费：￥8.0）</span>
					</div>
					<div class="tlw-right-content">
						<p>查看详情</p>
						<button>申请退款</button>
						<button>去评价</button>
						<button>交易完成</button>
					</div>
				</div>
			</div>
		</div>
		<div class="tlw-person-order-null">
			<h5>我的订单</h5>
			<ul>
				<li><span class="tlw-all-active">全部</span>|</li>
				<li><span>待付款</span>|</li>
				<li><span>待发货</span>|</li>
				<li><span>待收货</span>|</li>
				<li><span>待评价</span>|</li>
				<li><span>退款/售后</span>|</li>
				<li><span>已完成/关闭</span>|</li>
			</ul>
			<a href="###">订单回收站</a>
			<div class="tlw-order-none">
				<img src="../../images/19.png"/>
				<div class="tlw-none-right">
					<p>您还没有订单哦！</p>
					<button>去首页看看</button>
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
	.tlw-person-order{
		/*display: none;*/
		width: 1083px;
		border: 1px solid #CCCCCC;
		color: #666666;
		margin-left: 25px;
		position:relative;
		h5{
			font-size: 18px;
			font-weight: 500;
			color: #414141;
			line-height: 60px;
			border-bottom:1px solid #CCCCCC ;
			padding-left: 20px;
		}
		ul{
			width: 900px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin: 20px 0;
			li{
				span{
					margin-left: 10px;
					margin-right: 18px;
					padding: 5px 15px;
					font-size: 15px;
					&:hover{
						color: white;
						background: #f08200;
					}
				}
				.tlw-all-active{
					color: white;
					background: #f08200;
				}
			}
		}
		a{
			font-size: 14px;
			color: #4b943d;
			text-decoration: underline;
			position: absolute;
			right: 20px;
			top: 83px;
		}
		.tlw-person-details{
			border: 1px solid #CCCCCC;
			/*background: red;*/
			margin: 20px 20px;
			.tlw-details-top{
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
				p:nth-of-type(2){
					position: absolute;
					left: 250px;
				}
				strong{
					
					color: #6ca761;
					position: absolute;
					left: 550px;
				}
				span{
					position: absolute;
					right: 20px;
					em{
						color: #f08200;
					}
				}
			}
			.tlw-details-bottom{
				position: relative;
				.tlw-left-top{
					width: 698px;
					height: 120px;
					/*background: yellowgreen;*/
					display: flex;
					flex-direction: row;
					align-items: center;
					position: relative;
					img{
						position: absolute;
						left: 20px;
					}
					p{
						position: absolute;
						left: 120px;
					}
					span{
						position: absolute;
						left: 350px;
					}
					em{
						position: absolute;
						right: 100px;
					}
					&:nth-of-type(1){
						border-bottom: 1px solid #cccccc;
					}
				}
				.tlw-center-content{
					width: 208px;
					height: 241px;
					/*background: bisque;*/
					line-height: 30px;
					font-size: 15px;
					font-weight: 200;
					border-left: 1px solid #cccccc;
					position: absolute;
					right: 134px;
					top: 0;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				.tlw-right-content{
					width: 136px;
					height: 241px;
					/*background: greenyellow;*/
					border-left: 1px solid #cccccc;
					position: absolute;
					top: 0;
					right: 0;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					p{
						color: #63a257;
						text-decoration: underline;
						cursor: pointer;
					}
					button{
						width: 90px;
						height: 30px;
						background: #f08200;
						color: white;
						font-size: 14px;
						font-weight: 100;
						border: none;
						border-radius: 6px;
						cursor: pointer;
						&:nth-of-type(1){
							margin-top: 20px;
						}
						&:nth-of-type(2){
							margin: 10px 0;
						}
					}
				}
			}
		}
		
	}
}
.tlw-person-box {
	.tlw-person-order-null{
		width: 1083px;
		height: 616px;
		border: 1px solid #CCCCCC;
		color: #666666;
		margin-left: 25px;
		position:relative;
		h5{
			font-size: 18px;
			font-weight: 500;
			color: #414141;
			line-height: 60px;
			border-bottom:1px solid #CCCCCC ;
			padding-left: 20px;
		}
		ul{
			width: 900px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin-top: 20px;
			li{
				span{
					margin-left: 10px;
					margin-right: 18px;
					padding: 5px 15px;
					font-size: 15px;
					&:hover{
						color: white;
						background: #f08200;
					}
				}
				.tlw-all-active{
					color: white;
					background: #f08200;
				}
			}
		}
		a{
			font-size: 14px;
			color: #4b943d;
			text-decoration: underline;
			position: absolute;
			right: 20px;
			top: 83px;
		}
		.tlw-order-none{
			display: flex;
			flex-direction: row;
			position: absolute;
			top: 308px;
			left: 460px;
			.tlw-none-right{
				margin-left: 30px;
				display:flex;
				flex-direction: column;
				justify-content: space-around;
				p{
					font-size: 18px;
				}
				button{
					width: 150px;
					height: 45px;
					background: #f08200;
					border:none;
					border-radius: 6px;
					color: white;
					font-size: 20px;
					cursor: pointer;
				}
			}
		}
	}
}
</style>