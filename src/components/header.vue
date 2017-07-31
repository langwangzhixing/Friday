<template>
	<div>
		<div class="nav-top-lyc">
			<!--header-->
			<div class="nav-second-lyc">
				<a href="/home"><h1><img src="../img/1.png"/></h1></a>	
				<input type="text" placeholder="请输入关键字进行搜索"/>
				<button>搜</button>
				<div class="nav-second-user-lyc">
					<router-link to='/user/index'>
						<img src="../img/3.png" alt="" />&nbsp;&nbsp;<a href="javascript:;"><span>个人中心</span></a>
					</router-link>
				</div>
				<router-link to='/shoppCar'>
					<div class="nav-second-shoppingcar-lyc">
						<img src="../img/6.png" alt="" />&nbsp;&nbsp;<a href="javascript:;"><span>购物车</span></a>
						<em id="shopCarCount">0</em>
						<img src="../img/dhk.png" alt="" />
					</div>
				</router-link>
				<div class="nav-second-bottom-lyc">
					<a href="javascript:void(0)">热门:</a>
					<a href="javascript:void(0)">杂粮饭</a>
					<a href="javascript:void(0)">辣椒酱</a>
					<a href="javascript:void(0)">水果礼篮</a>
					<a href="javascript:void(0)">擦玻璃</a>
					<a href="javascript:void(0)">苹果</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import router from '../router';
	export default{
		created(){
			$(window).scroll(function(){
				var height = $(document).scrollTop();
				if(height > 170){
					$(".nav-second-lyc").addClass("nav-second-tlw");
					$(".nav-top-lyc").addClass("nav-top-tlw");
				}else{
					$(".nav-second-lyc").removeClass("nav-second-tlw");
					$(".nav-top-lyc").removeClass("nav-top-tlw");
				}
			})
		}
	}
</script>

<style scoped>
.nav-top-tlw {
	width: 100%;
	height: 105px;
	background: #fff;
	border-bottom: 1px solid #ddd;
	position: fixed;
	top: 0;
	z-index: 100;
}
.nav-second-lyc {
	width: 1280px;
	height: 69px;
	margin: 0 auto;
	margin-top: 25px;
	position: relative;
	margin-bottom: 50px;
}
.nav-second-tlw {
	width: 1280px;
	height: 69px;
	/*background: greenyellow;*/
	position: fixed;
	left: 50%;
	margin-left: -640px;
	top: -22px;
	z-index: 99;
}
.nav-second-lyc a h1 {
	display: inline-block;
}
.nav-second-lyc input {
	display: inline-block;
	width:456px;
	height:40px;
	color:#666;
	font-size:14px;
	padding-left:15px;
	box-sizing:border-box;
	border:2px solid green;
	position: absolute;
	bottom: 0;
	margin-left: 103px;
}
.nav-second-lyc button {
	display: inline-block;
	width:40px;
	height:40px;
	background:green;
	position:absolute;
	bottom: 0;
	right:311px;
	text-align:center;
	cursor: pointer;
	color: #FFFFFF;
	font-size: 16px;
	border: none;
}
.nav-second-user-lyc, .nav-second-shoppingcar-lyc {
	display: inline-block;
	width: 127px;
	height: 40px;
	border: 1px solid #e5e5e5;
	background: #f8f8f6;
	text-align: center;
	font-size: 16px;
	line-height: 40px;
}
.nav-second-user-lyc {
	position: absolute;
	right: 145px;
	bottom: 0;
}
.nav-second-user-lyc a{color: #000;}
.nav-second-shoppingcar-lyc {
	position: absolute;
	right: 0;
	bottom: 0;
}
.nav-second-shoppingcar-lyc img:last-child {
	position: absolute;
	top: -12px;
	left: 40px;
}
.nav-second-shoppingcar-lyc em {
	display: inline-block;
	position: absolute;
	top: -22px;
	left: 46px;
	color: #FFFFFF;
	z-index: 1;
}
.nav-second-bottom-lyc {
	position: absolute;
	left: 466px;
	bottom: -25px;
}
.nav-second-bottom-lyc a {
	display: inline-block;
	padding: 0 7px;
	font-size: 14px;
	color: #666;
}
.nav-third-lyc {
	margin-top: 38px;
	width: 1280px;
	height: 50px;
}
</style>