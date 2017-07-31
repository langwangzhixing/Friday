<template>
	<div>
		<div class="tlw-register">
			<div class="tlw-register-box">
				<bullet :tanMsg='tanMsg'></bullet>
				<div class="tlw-box tlw-box-login">
					<div class="tlw-box-top" >
						<h4>登录</h4>
						<span>手机验证码登录</span>
						<img src="../images/tu2.png" alt="" />
					</div>
					<div class="tlw-box-inpts">
						<input class="input1" type="text" placeholder="请输入手机号" />
						<strong class="phone"><em>!</em>请输入手机号</strong>
						<input class="input2" type="password" placeholder="请输入密码" />
						<strong class="password"><em>!</em>请输入密码</strong>
						<img src="../images/15.png" />
						<input class="input3" type="text" placeholder="验证码" />
						<strong class="code"><em>!</em>请输入验证码</strong>
						<img :src='"../../static/imgs/testImage/"+img+".png"' />
						<span @click="change()">看不清，换一张</span>
					</div>
					<div class="tlw-box-auto">
						<span><input type="checkbox" />自动登录</span>
						<p @click="reset()">忘记密码？</p>
					</div>
					<div class="tlw-box-btn">
						<button @click="login" class="login-btn1">登录</button>
						<button @click="register" class="register-btn1">会员注册</button>
						<p>提示：未注册的用户将直接注册为礼拜五用户</p>
					</div>
				</div>
				<div class="tlw-box tlw-box-zhuce">
					<div class="tlw-box-top">
						<h4>注册</h4>
					</div>
					<div class="tlw-box-inpts">
						<input v-model="regPhone" class="input1" type="text" placeholder="请输入手机号" />
						<strong class="phone zh-warn"><em>!</em>请输入手机号</strong>
						<input v-model="regPwd" class="input2" type="password" placeholder="请输入密码" />
						<strong class="password zh-warn"><em>!</em>请输入密码</strong>
						<img src="../images/15.png" />
						<input class="input3" type="text" placeholder="验证码" />
						<img :src='"../../static/imgs/testImage/"+img+".png"' />
						<span @click="change()">看不清，换一张</span>
						<strong class="code zh-warn"><em>!</em>请输入验证码</strong>
						<input class="input4" type="text" placeholder="请输入手机验证码" />
						<button>手机验证码</button>
						<strong class="message zh-warn"><em>!</em>请输入短信验证码</strong>
					</div>
					<div class="tlw-box-read">
						<strong @click="bool=!bool"><em v-show="bool"></em></strong>
						<span>我已阅读并同意《礼拜五用户使用协议》</span>
					</div>
					<div class="tlw-box-btn">
						<button @click="reg" class="register-btn2">注册</button>
						<button @click="login" class="login-btn2">登录</button>
					</div>
				</div>
				
				
				<div class="tlw-box tlw-box-resetPasswords">
					<div class="tlw-box-top">
						<h4>重置密码</h4>
					</div>
					<div class="tlw-box-inpts">
						<input class="input1" type="text" placeholder="请输入手机号" />
						<strong class="phone zh-warn"><em>!</em>请输入手机号</strong>
						<div class="tlw-reset-code">
							<input class="input3" type="text" placeholder="验证码" />
							<img :src='"../../static/imgs/testImage/"+img+".png"' />
							<span @click="change()">看不清，换一张</span>
						</div>
						
						<strong class="code zh-warn"><em>!</em>请输入验证码</strong>
						<input class="input2" type="password" placeholder="请输入密码" />
						<strong class="password zh-warn"><em>!</em>请输入密码</strong>
						<img class="tlw-eyes tlw-eyes2" src="../images/15.png" />
						<input class="input5" type="password" placeholder="请再次输入密码"/>
						<strong class="password2 zh-warn"><em>!</em>请输入密码一致</strong>
						<input class="input4" type="text" placeholder="请输入手机验证码" />
						<button>手机验证码</button>
						<strong class="message zh-warn"><em>!</em>请输入短信验证码</strong>
					</div>
					
					<div class="tlw-box-btn">
						<button @click="submit()" class="register-btn2">提交</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bullet from 'components/bullet';
	import router from '../router';
	
	export default{
		props:["message"],
		data() {
			return {
				regPhone:'',
				regPwd:'',
				tanMsg:'用户名或密码不正确!',
				bool:true,
				img:'yan5',
				imgArr:['yan1','yan2','yan3','yan4','yan5','yan6','yan7','yan8','yan9'],
				testArr:['EKPK','FWLS','EFLS','MKLO','KWUN','EYCZ','EWRZ','LFNF','KLMR'],
				phoneNum:/^1[3578]\d{9}$/
			}
		},
		components:{
			bullet
		},
		methods:{
			reset(){
				$(".tlw-box-login").hide();
				$(".tlw-box-resetPasswords").show();
			},
			change(){
				var index = this.ranNum(0,8);
				this.img = this.imgArr[index];
			},
			ranNum(min,max){
				return Math.floor(Math.random()*(max-min+1)+min);
			},
			setCookie(name, value, days) {
			    var d = new Date;
			    d.setTime(d.getTime() + 24*60*60*1000*days);
			    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
			},
			login(){
				var _this = this;
				$('.tlw-box-zhuce').css('display','none');
  				$('.zh-warn').css('opacity',0);
				if ($('.input1').val() && $('.input2').val()) {
					var phone = $('.input1').val();
					var pwd = $('.input2').val();
					this.$http.post('/api/user/login',{phone:phone,passWord:pwd},{emulateJSON:true}).then(function(res){
						var data = res.data;
						if (data==1) {
							_this.setCookie('fridayUser',phone,5);
							_this.setCookie('fridaypwd',pwd,5);
							router.push({path:'/home',query:{user:phone}});
							_this.$emit("logins","{title:'你好,',phone:"+phone+"}");
							_this.$emit("register","退出");
						} else{
							$(".bullet").fadeIn(500).delay(500).fadeOut();
						}
					});
				}
			},
			register(){
				$('.tlw-box-zhuce').css('display','block');
	  			$('.zh-warn').css('opacity',0);
	  			
			},
			reg(){
				this.$http.post('/api/user/reg',{phone:this.regPhone,passWord:this.regPwd},{emulateJSON:true}).then(function(res){
					var result = res.body;
					if (result.err) {
//						console.log(result.data)
						alert("注册成功")
					}
				})
			},
			submit(){
				var phone = $(".tlw-box-resetPasswords .input1").val();
				var passWord1 = $(".tlw-box-resetPasswords .input2").val();
				var passWord2 = $(".tlw-box-resetPasswords .input5").val();
				if(!phone){
					$(".phone").show();
				}else{
					if(!this.phoneNum.test(phone)){
						alert("请输入正确手机号！")
					}else{
						if(passWord1==passWord2){
							$(".password").css("opacity","0")
							$(".password2").css("opacity","0")
						}else{
							$(".password2").css("opacity","1")
						}
					}
				}
			},
			test(){
				var _this = this;
				var phoneNum = /^1[3578]\d{9}$/;
				if(!phoneNum.test($('.input1').val())) {
					$(".phone").css("opacity", "1");
					$(".input1").focus();
				}else{
					if($(".input2").val() && $(".input3").val()) {
						$(".password").css("opacity", "1");
						$(".code").css("opacity", "1");
					}
				}
				//当input聚焦时，此输入框的边框和内阴影出现
				$(".tlw-box-inpts>input").on("focus", function() {
					$(this).css("border", "1px solid #74afec")
					$(this).css("box-shadow", "inset 0 0 5px #74afec")
				})
				//当第一个输入框失交时，输入框的边框和内阴影出现，如果输入值为空，则显示警告语️
				$(".input1").focus(function(){
					$(".phone").css("opacity", "0");
				});
				$(".input1").on("blur", function() {
					$(this).css("border", "1px solid #cccccc")
					$(this).css("box-shadow", "none")
					if($(this).val().length != 11) {
						$(".phone").css("opacity", "1");
					}
					if($(this).val().length == 11) {
						$(".phone").css("opacity", "0");
					}
				})
				//当第二个输入框失交时，输入框的边框和内阴影出现，如果输入值为空，则显示警告语
				$(".input2").focus(function(){
					$(".password").css("opacity", "0");
				});
				$(".input2").on("blur", function() {
					$(this).css("border", "1px solid #cccccc")
					$(this).css("box-shadow", "none")
					if($(this).val().length == 0) {
						$(".password").css("opacity", "1");
					}
					if($(this).val().length > 0) {
						$(".password").css("opacity", "0");
					}
				})
				$(".input3").focus(function(){
					$(".code").css("opacity", 0);
				});
				$(".input3").on("blur", function() {
					$(this).css("border", "1px solid #cccccc");
					$(this).css("box-shadow", "none");
					var str = $(this).val().toUpperCase();
					if( _this.testArr.indexOf(str)<0) {
						$(".code").css("opacity", "1");
					}
				})
				$(".input4").on("blur", function() {
					$(this).css("border", "1px solid #cccccc")
					$(this).css("box-shadow", "none")
					if($(this).val().length == 0) {
						$(".message").css("opacity", "1");
					}
				})
			}
		},
		mounted() {
			this.test();
			$('#zh-login').click(function () {
  				$('.tlw-box-zhuce').css('display','none');
  				$('.zh-warn').css('opacity',0);
  				$(".tlw-box-login").show();
				$(".tlw-box-resetPasswords").hide();
	  		});
	  		$('#zh-reg').click(function () {
	  			$('.tlw-box-zhuce').css('display','block');
	  			$('.zh-warn').css('opacity',0);
	  		});
		}
	}
	
</script>

<style scoped>
	.bullet{
		position: absolute;
		top: 200px;
		left: -220px;
		display: none;
	}
	h1{
		font-size: 30px;
		padding-left: 20px;
	}
	.tlw-register {
		width: 100%;
		height: 500px;
		min-width: 1000px;
		background: url(../images/图1.jpg) no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	
	.tlw-register .tlw-register-box {
		width: 400px;
		height: 498px;
		background: white;
		border-top: 1px solid #cccccc;
		border-bottom: 1px solid #cccccc;
		position: absolute;
		top: 0;
		right: 200px;
		/*overflow: hidden;*/
	}
	
	.tlw-register .tlw-register-box .tlw-box {
		padding: 40px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-top {
		position: relative;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-top h4 {
		color: #707070;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-top span {
		color: #4b943d;
		font-size: 14px;
		position: absolute;
		right: 20px;
		bottom: 0;
		z-index: 0;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-top img {
		width: 14px;
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 0;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts {
		margin-top: 10px;
		position: relative;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts input {
		width: 317px;
		height: 32px;
		font-size: 14px;
		background: #f9f9f9;
		margin: 8px 0;
		border: 1px solid #cccccc;
		text-indent: 8px;
	}
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts input:nth-of-type(3) {
		display: block;
		width: 130px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts strong {
		display: inline-block;
		font-size: 12px;
		color: red;
		opacity: 0;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts strong em {
		display: inline-block;
		width: 10px;
		height: 10px;
		color: white;
		text-align: center;
		border: 1px solid;
		border-radius: 50%;
		background: red;
		margin-right: 5px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts img:nth-of-type(1) {
		position: absolute;
		right: 1px;
		top: 85px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts img:nth-of-type(2) {
		position: absolute;
		width: 77px;
		height: 30px;
		left: 140px;
		top: 147px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts span {
		color: #ff6600;
		font-size: 13px;
		line-height: 30px;
		position: absolute;
		right: 5px;
		top: 155px;
		cursor: pointer;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-auto {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 13px;
		margin-top: 46px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-auto input {
		width: 14px;
		height: 14px;
		border-radius: 4px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-auto p {
		color: #ff6600;
		cursor: pointer;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn {
		position: relative;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn button {
		width: 140px;
		height: 44px;
		border: none;
		font-size: 14px;
		color: white;
		border-radius: 5px;
		margin: 18px 0;
		cursor: pointer;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn button:nth-of-type(1) {
		background: #ea5b0c;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn button:nth-of-type(2) {
		background: #4b943d;
		position: absolute;
		right: 0;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn p {
		font-size: 14px;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce {
		background: white;
		position: absolute;
		top: 0;
		z-index: 10;
		display: none;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-inpts input:nth-of-type(4) {
		margin-top: 10px;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-inpts button {
		border: none;
		background: #4b943d;
		position: absolute;
		bottom: 27px;
		right: 1px;
		padding: 7px 10px;
		cursor: pointer;
		color: white;
	}
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-read strong {
		display: inline-block;
		width: 11px;
		height: 11px;
		border: 1px solid deepskyblue;
		border-radius: 50%;
		text-align: center;
		line-height: 8px;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-read strong em {
		display: inline-block;
		width: 9px;
		height: 9px;
		background: deepskyblue;
		border-radius: 50%;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-read span {
		display: inline-block;
		font-size: 12px;
		color: #666666;
		margin: 20px 0;
	}
	h1{
		font-size: 30px;
		padding-left: 20px;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords{
		display: none;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords .tlw-box-inpts .tlw-reset-code{
		
		position: relative;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords .tlw-box-inpts .tlw-reset-code .input3{
		position: relative;
		width: 130px;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords .tlw-box-inpts .tlw-reset-code img{
		width: 77px;
		height: 30px;
		position: absolute;
		top: 10px;
		left: 140px;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords .tlw-box-inpts .tlw-reset-code span{
		position: absolute;
		right: 0;
		top: 10px;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords .tlw-box-inpts img.tlw-eyes2{
		top: 150px;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords .tlw-box-inpts input:nth-last-of-type(2){
		width: 317px;
		height: 32px;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords .tlw-box-inpts button {
		border: none;
		background: #4b943d;
		position: absolute;
		bottom: 27px;
		right: 1px;
		padding: 7px 10px;
		cursor: pointer;
		color: white;
	}
	.tlw-register .tlw-register-box .tlw-box-resetPasswords .tlw-box-btn button{
		width: 317px;
	}
	
	
	
	
</style>