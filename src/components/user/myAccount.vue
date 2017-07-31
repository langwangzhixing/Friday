<template>
	<div class="tlw-person-box">
		<div class="tlw-myAccount">
			<div class="tlw-myAccount-top">
				<img :src="'../../../static/upload/'+msg.headImg" />
				<p>您好，<span>{{name}}</span></p>
				<ul class="tlw-present">
					<li>当前积分<em>{{msg.integral}}</em></li>
					<li>我的钱包<em>￥{{msg.wallet}}</em></li>
					<li>充值有礼>><em>充值卡兑换>></em></li>
				</ul>
			</div>
			<div class="tlw-myAccount-bottom">
				<div class="tlw-first"></div>
				<div class="tlw-second">
					<h2>新人福利享不停</h2>
					<h4>充值有好礼</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				msg:{headImg:'default.png'},
				name:'你还没有登录'
			}
		},
		methods:{
			getCookie(name) {
			    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
			    return v ? v[2] : null;
			}
		},
		created(){
			var phone = this.getCookie('fridayUser');
			if (phone) {
				this.$http.get('/api/user/myAccount',{params:{phone:phone}}).then((res) => {
					this.msg = res.data[0];
					if (this.msg.userName=='nomsg') {
						this.name = this.msg.phone;
					}else{
						this.name = this.msg.userName;
					}
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	.tlw-person-box {
		width: 1083px;
		.tlw-myAccount {
			width: 1083px;
			/*background: pink;*/
			margin-left: 25px;
			.tlw-myAccount-top {
				width: 1083px;
				height: 220px;
				background: #f4fff2;
				border: 1px solid #cccccc;
				display: flex;
				flex-direction: row;
				align-items: center;
				position: relative;
				img{
					width: 124px;
					height: 124px;
					border: 5px solid #ffe313;
					border-radius: 50%;
					margin: 0 50px;
				}
				p{
					font-size: 18px;
					font-weight: 200;
					span{
						font-size: 20px;
						color: #e85e35;
					}
				}
				.tlw-present{
					width: 420px;
					height: 60px;
					/*background: pink;*/
					font-size: 18px;
					font-weight: 200;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					position: absolute;
					right: 80px;
					li{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						&:nth-of-type(3){
							cursor: pointer;
							color: #83b879;
						}
						em{
							font-size: 20px;
							color: #e85e35;
						}
					}
				}
			}
			.tlw-myAccount-bottom{
				width: 1083px;
				height: 384px;
				border: 1px solid #cccccc;
				background: url(../../images/18.png) no-repeat;
				background-size: cover;
				margin-top: 20px;
				position: relative;
				.tlw-first{
					width: 538px;
					height: 234px;
					background: rgba(255,255,255,0.2);
					position: absolute;
					top: 75px;
					left:272px ;
				}
				.tlw-second{
					width: 517px;
					height: 214px;
					background: rgba(255,255,255,0.2);
					position: absolute;
					top: 85px;
					left:283px ;
					text-align: center;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					h2{
						width: 460px;
						font-size: 50px;
						font-weight: 900;
						color: white;
						line-height: 75px;
						/*background: yellowgreen;*/
						letter-spacing: 15px;
						margin: 0 auto;
						/*margin-left: 10px;*/
					}
					h4{
						width: 400px;
						font-size: 36px;
						font-weight: 800;
						color: white;
						letter-spacing: 30px;
						/*background: pink;*/
						line-height: 70px;
						margin: 0 auto;
						border-top: 1px solid white;
						border-bottom: 1px solid white;
					}
				}
			}
		}
	}
</style>