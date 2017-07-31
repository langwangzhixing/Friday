<template>
	<div class="tlw-person-box">
		<div class="tlw-rechargeCard">
			<div class="tlw-rechargeCard-top">
				<h5>充值卡兑换</h5>
				<button>查看账单</button>
			</div>
			<div class="tlw-rechargeCard-bottom">
				<input type="text" placeholder="请输入充值卡兑换码进行充值"/>
				<button>充值</button>
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
		.tlw-rechargeCard {
			width: 1083px;
			height: 616px;
			border: 1px solid #CCCCCC;
			margin-left: 25px;
			.tlw-rechargeCard-top {
				height: 60px;
				border-bottom: 1px solid #cccccc;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 0 20px;
				h5 {
					font-size: 18px;
					color: #414141;
					font-weight: 200;
				}
				button {
					width: 90px;
					height: 30px;
					border: none;
					font-size: 14px;
					font-weight: 200;
					border-radius: 6px;
					color: white;
					background: #498e3d;
				}
			}
			.tlw-rechargeCard-bottom{
				padding-left: 30px;
				display: flex;
				flex-direction: column;
				input{
					width: 478px;
					height: 54px;
					border: 1px solid #cccccc;
					font-size: 18px;
					font-weight: 100;
					text-indent: 20px;
					margin-top: 50px;
				}
				button{
					width: 150px;
					height: 50px;
					border: none;
					background: #f08200;
					font-size: 20px;
					font-weight: 100;
					color: white;
					border-radius: 6px;
					margin-top: 100px;
				}
			}
		}
	}
</style>