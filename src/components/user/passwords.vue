<template>
	<div class="password-lyc">
		<div class="password-top-lyc">
			<span>修改密码</span>
		</div>
		<ul class="password-content-lyc">
		 	<li>
		 		<input  v-model="resPhone" placeholder="请输入手机号码" class="input1"/>
		 	</li>
		 	<li>
		 		<input  v-model="resPasd1" placeholder="请输入密码(6-20位号码字符)" class="input2"/>
		 	</li>
		 	<li>
		 		<input  v-model="resPasd2" placeholder="请再次输入密码确认" class="input3"/>
		 	</li>
		 	<li>
		 		<input  placeholder="验证码"/><span>&nbsp;</span><a href="###">看不清,换一张</a>
		 	</li>
		 	<li>
		 		<input  placeholder="手机验证码"/><button>获取验证码</button>
		 	</li>
		 	<li>
		 		<button>提交修改</button>
		 	</li>
		</ul>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	.password-lyc {
		width: 1083px;
		height: 618px;
		border: 1px solid #e7e7e7;
		margin-left: 25px;
		margin-bottom: 48px;
		.password-top-lyc {
			border-bottom:1px solid #e7e7e7; 
			span {
				display: inline-block;
				padding: 20px 21px;
			}
		}
		.password-content-lyc {
			margin: 40px 42px;
			li {
				margin-bottom: 30px;
				input {
					border: 1px solid #d3d3d3;
					font-size: 16px;
					padding: 0 10px;
				}
			}
			li:nth-child(1), li:nth-child(2), li:nth-child(3), li:nth-child(5) {
				input {
					width: 285px;
					height: 44px;
				}
			}
			li:nth-child(4) {
				input {
					width: 85px;
					height: 44px;
				}
				span {
					display: inline-block;
					width: 81px;
					height: 36px;
					background: url(../../img/random.png) no-repeat;
					cursor: pointer;
					margin-left: 21px;
					margin-right: 10px;
					vertical-align: middle;
				}
				a {
					font-size: 14px;
					color: #4b943d;
				}
			}
			li:nth-child(5) {
				position: relative;
				button {
					position: absolute;
					left: 201px;
					top: 4px;
					font-size: 14px;
					color: #FFFFFF;
					background: #498e3d;
					padding: 9px  16px;
					border: none;
					cursor: pointer;
				}
			}
			li:last-child {
				button {
					font-size: 20px;
					color: #fff;
					padding: 10px 26px;
					margin-top: 41px;
					border: none;
					background: #f08200;
					border-radius: 4px;
					cursor: pointer;
				}
			}
		}
	}
</style>