<template>
	<div class="tlw-person-box">
		<div class="tlw-myWallet">
			<h5>账户余额：<em>￥20.0</em></h5>
			<div class="tlw-wallet-recharge">
				<p>请选择充值金额：</p>
				<button class="tlw-wallet-active">500元</button>
				<button>1000元</button>
				<button>2000元</button>
				<p>充值有礼</p>
				<div class="tlw-recharge-left">
					<h4>充500元送：</h4>
					<span>新疆哈密瓜25kg</span>
					<strong>价值：500</strong>
				</div>
				<div class="tlw-recharge-left">
					<h4>充500元送：</h4>
					<span>新疆哈密瓜25kg</span>
					<strong>价值：500</strong>
				</div>
				<button>立即充值</button>
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
		.tlw-myWallet{
			width: 1083px;
			height: 616px;
			border: 1px solid #CCCCCC;
			margin-left: 25px;
			position:relative;
			h5{
				font-size: 18px;
				font-weight: 500;
				color: #414141;
				line-height: 60px;
				border-bottom:1px solid #CCCCCC ;
				padding-left: 20px;
				em{
					color: #e85e35;
				}
			}
		}
		.tlw-wallet-recharge{
			padding: 40px;
			overflow: hidden;
			p{
				font-size: 18px;
				font-weight: 200;
				margin-bottom: 20px;
				&:nth-of-type(2){
					color: #f08200;
					margin-top: 40px;
				}
			}
			button{
				width: 116px;
				font-size: 18px;
				font-weight: 200;
				background: white;
				border: 1px solid #cccccc;
				margin-right: 35px;
				cursor: pointer;
				&:nth-of-type(1),&.tlw-wallet-active,&:hover{
					border: 1px solid #64a130;
					background: #f4fff2;
				}
				&:nth-of-type(4){
					width: 150px;
					height: 50px;
					color: white;
					font-weight: 100;
					border: none;
					border-radius: 6px;
					background: #f08200;
					position: absolute;
					left: 40px;
					bottom: 90px;
				}
			}
			.tlw-recharge-left{
				width: 356px;
				height: 190px;
				font-size: 18px;
				font-weight: 200;
				border: 1px solid #cccccc;
				background: url(../../images/21.png) no-repeat;
				margin-right: 40px;
				float: left;
				position: relative;
				h4{
					margin-top: 20px;
					margin-left: 20px;
				}
				span{
					position: absolute;
					right: 20px;
					top: 80px;
				}
				strong{
					position: absolute;
					right: 65px;
					bottom: 50px;
				}
			}
		}
	}
</style>