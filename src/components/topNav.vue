<template>
	<div>
		<!--header_first-->
		<div class="nav-first-lyc">
			<div class="nav-first-content-lyc">
				<div class="first-content-left-lyc">
					<span>所在城市:</span>
					<span id="city">&nbsp;哈密市伊州市</span>&nbsp;&nbsp;
					<span></span>
				</div>
				<ul class="first-content-right-lyc">
					<router-link to="/login" tag='li' >
						<span id="zh-login">{{message.log.title}}</span>
						<strong id="zh-phone">{{message.log.phone}}</strong>
					|</router-link>
					<li>
						<span id="zh-reg" @click="logOut()">{{message.reg}}</span>
					|</li>
					<router-link to="/user/myOrder" tag='li'>
						<span>我的订单</span>
						|</router-link>
					<router-link to="/user/message" tag='li'>
						<span>我的消息</span>
						|</router-link>
					<router-link to="/login" tag='li'>
						<span>我是商家</span>
						|</router-link>
					<li><img src="../img/5.png"/>&nbsp;&nbsp;090---22511</li>
				</ul>
			</div>
			<current-city id="cover"></current-city>
		</div>
	</div>
</template>

<script>
	import currentCity from 'components/currentCity';
	import router from '../router';
	
	export default{
		props:["message"],
		components:{ currentCity },
	    mounted(){
	    		_init_area();
	    		$('#city').click(function () {
	    			$('#cover').toggle()
	    		});
	    },
	    methods:{
	    		logOut(){
	    			this.deleteCookie('fridayUser');
	    			if(this.message.reg == '退出'){
		    			this.message = {
						log: {title: "登录"},
						reg: "注册"
					};
					router.push('/login');
					router.go(0);
	    			}
	    		},
	    		setCookie(name, value, days) {
			    var d = new Date;
			    d.setTime(d.getTime() + 24*60*60*1000*days);
			    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
			},
	    		deleteCookie(name) {
			    this.setCookie(name, '', -1);
			}
	    }
	}
</script>

<style scoped>
#cover{display: none;}
.nav-first-lyc {
	height:36px;
	background:#eee;
	}
.nav-first-content-lyc {
	width: 1280px;
	/*overflow: hidden;*/
	margin: 0 auto;
	line-height: 36px;
}
.first-content-left-lyc {
	float: left;
	font-size: 14px;
}
.first-content-left-lyc span:nth-child(3) {
	display: inline-block;
	background: url(../img/7.png) no-repeat;
	width: 20px;
	height: 7px;
	vertical-align: middle;
}
.first-content-right-lyc {
	float: right;
}
.first-content-right-lyc li {
	float: left;
	font-size: 14px;
	margin-left: 10px;
	cursor: pointer;
}
.first-content-right-lyc li span{margin: 0 5px;}
.first-content-right-lyc li strong{color: #50943d;}
.first-content-right-lyc li img{
	vertical-align: middle;
}
.first-content-right-lyc li:last-child {
	margin-left: 10px;
	border-right: none;
}
.first-content-right-lyc li:first-child a {
	color: #569a49;
}
</style>