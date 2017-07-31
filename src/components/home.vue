<template>
	<div>
		<!--轮播图-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><a class="tlw-picture1" href="###"></a></div>
				<div class="swiper-slide"><a class="tlw-picture2" href="###"></a></div>
				<div class="swiper-slide"><a class="tlw-picture3" href="###"></a></div>
				<div class="swiper-slide"><a class="tlw-picture4" href="###"></a></div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button swiper-button-prev"></div>
			<span class="iconfont icon-arrow-circle-o-left"></span>
			<div class="swiper-button swiper-button-next"></div>
			<span class="iconfont icon-arrow-circle-o-right"></span>
		</div>
		
		<!--新品和热卖-->
		<div class='tlw-homeGoods'>
			<ul class="tlw-hot-sale">
				<router-link to="/nofind" tag="li">
					<img src="../../static/imgs/testImage/tu-green.png" />
					<img src="../../static/imgs/testImage/sale2.png" />
					<div class="tlw-sale-p">
						<p>内蒙古草原</p>
						<p>羔羊羊精肉</p>
					</div>
				</router-link>
				<router-link to="/nofind" tag="li">
					<img src="../../static/imgs/testImage/tu-orange.png" />
					<img src="../../static/imgs/testImage/sale1.png" />
					<div class="tlw-sale-p">
						<p>新西兰柠檬</p>
						<p>鲜橙靓皮 柠香清新</p>
					</div>
				</router-link>
				<router-link to="/nofind" tag="li">
					<img src="../../static/imgs/testImage/tu-green.png" />
					<img src="../../static/imgs/testImage/sale2.png" />
					<div class="tlw-sale-p">
						<p>内蒙古草原</p>
						<p>羔羊羊精肉</p>
					</div>
				</router-link>
				<router-link to="/nofind" tag="li">
					<img src="../../static/imgs/testImage/tu-orange.png" />
					<img src="../../static/imgs/testImage/sale1.png" />
					<div class="tlw-sale-p">
						<p>新鲜草莓</p>
						<p>留住新鲜</p>
					</div>
				</router-link>
			</ul>
			<home-goods></home-goods>
		</div>
	</div>
</template>

<script>
	import homeGoods from './homeGoods';	
	
	export default {
		components:{homeGoods},
		methods:{},
		mounted() {
		    this.$nextTick(function() {
		        //轮播图
				var mySwiper = new Swiper('.swiper-container', {
					direction: 'horizontal',
					loop: true,
					autoplay: 3000,
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
				})
				$(".swiper-button-prev").on("mouseover", function() {
					$(".icon-arrow-circle-o-left").css("color", "rgba(241,131,2,1)");
				})
				$(".swiper-button-prev").on("mouseout", function() {
					$(".icon-arrow-circle-o-left").css("color", "rgba(241,131,2,0.4)");
				})
				$(".swiper-button-next").on("mouseover", function() {
					$(".icon-arrow-circle-o-right").css("color", "rgba(241,131,2,1)");
				})
				$(".swiper-button-next").on("mouseout", function() {
					$(".icon-arrow-circle-o-right").css("color", "rgba(241,131,2,0.4)");
				});
				
				//倒计时
				function getRTime() {
					var EndTime = new Date('2017/07/30 10:00:00');
					var NowTime = new Date();
					var t = EndTime.getTime() - NowTime.getTime();
					var d = Math.floor(t / 1000 / 60 / 60 / 24);
					var h = Math.floor(t / 1000 / 60 / 60 % 24);
					var m = Math.floor(t / 1000 / 60 % 60);
					var s = Math.floor(t / 1000 % 60);
					$(".tlw-day").text(d + "天");
					$(".tlw-h").text(h);
					$(".tlw-m").text(m);
					$(".tlw-s").text(s);
				}
				setInterval(getRTime, 1000);
		    });
	    }
	}
</script>

<style lang="less" scoped>
	/*轮播图*/
.tlw-homeGoods{
	width: 1280px;
	margin: 0 auto;
}		
.swiper-wrapper {
	position: relative;
}

.swiper-container {
	width:100%;
	height: 500px;
}
.swiper-button {
	width: 60px;
	height: 60px;
	border: 1px solid;
	opacity: 0;
}
.swiper-button-prev{
	margin-left: 50px;
}
.swiper-button-next{
	margin-right: 50px;
}
.icon-arrow-circle-o-left {
	color: rgba(241, 131, 2, 0.4);
	position: absolute;
	left: 60px;
	top: 50%;
	margin-top: -25px;
	z-index: 2;
}

.icon-arrow-circle-o-right {
	color: rgba(241, 131, 2, 0.4);
	position: absolute;
	right: 60px;
	top: 50%;
	margin-top: -25px;
	z-index: 2;
}
.swiper-slide a{
	display: block;
	width: 100%;
	min-width: 1000px;
	height: 500px;
	background-position: center;
}

.tlw-picture1{
	background: url(../images/图1.jpg);
}
.tlw-picture2{
	background: url(../images/图2.jpg);
}
.tlw-picture3{
	background: url(../images/图3.jpg);
}
.tlw-picture4{
	background: url(../images/图4.jpg);
}

/*新品和热卖*/

.tlw-hot-sale {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.tlw-hot-sale li {
	width: 305px;
	height: 140px;
	background: url(../../static/imgs/testImage/picture4.png);
	background-size: 100% 100%;
	margin: 20px 0;
	cursor: pointer;
	position: relative;
}
.tlw-hot-sale li:nth-of-type(2){
	background: url(../../static/imgs/testImage/picture3.png);
	p:nth-of-type(2){
		font-size: 16px;
		font-weight: 100;
	}
}
.tlw-hot-sale li:nth-of-type(3){
	background: url(../../static/imgs/testImage/picture2.png);
}
.tlw-hot-sale li:nth-of-type(4){
	background: url(../../static/imgs/testImage/picture1.png);
	p:nth-of-type(2){
		font-size: 16px;
		font-weight: 100;
	}
}
.tlw-hot-sale li img:nth-of-type(2) {
	width: 30px;
	position: absolute;
	top: 0;
	left: 0;
}

.tlw-hot-sale li .tlw-sale-p {
	font-size: 20px;
	font-weight: 200;
	line-height: 38px;
	color: #666666;
	position: absolute;
	top: 30px;
	left: 25px;
}

</style>