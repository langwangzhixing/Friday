<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<a href="###"></a>
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button swiper-button-prev"></div>
			<span class="iconfont icon-arrow-circle-o-left"></span>
			<div class="swiper-button swiper-button-next"></div>
			<span class="iconfont icon-arrow-circle-o-right"></span>
		</div>
		<ul class="tlw-integral">
			<li>
				<a href="product.html"><img src="../images/12.jpg" /></a>
				<h2>优质核桃夹子</h2>
				<p>优质核桃夹子</p>
				<div><span>积分：<em>1</em>价值：￥20</span></div>
				<a href=""><button>立即兑换</button></a>
			</li>
		</ul>
	</div>
</template>

<script>
	import swiper from './swiper';
	export default {
		components:{ swiper },
		mounted(){
			this.$nextTick(function () {
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
			})
			});
		}
	}
</script>

<style scoped>
	.swiper-wrapper {
		position: relative;
	}
	
	.swiper-wrapper a {
		display: block;
		width: 100%;
		min-width: 1000px;
		height: 500px;
		background: url(../images/11.png);
		background-position: center;
	}
	
	.swiper-container {
		width: 100%;
		height: 500px;
	}
	
	.swiper-button {
		width: 60px;
		height: 60px;
		border: 1px solid;
		opacity: 0;
	}
	
	.swiper-button-prev {
		margin-left: 50px;
	}
	
	.swiper-button-next {
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
	
	.tlw-integral {
		width: 1280px;
		margin: 20px auto;
	}
	
	.tlw-integral li {
		width: 305px;
		height: 466px;
		border: 1px solid #cccccc;
		text-align: center;
	}
	
	.tlw-integral li img {
		width: 100%;
	}
	
	.tlw-integral li h2 {
		font-size: 20px;
		margin: 15px 0;
	}
	
	.tlw-integral li p {
		font-size: 15px;
		color: #666666;
	}
	
	.tlw-integral li div {
		font-size: 18px;
		color: #666666;
		margin: 15px 0;
	}
	
	.tlw-integral li div em {
		color: red;
		padding-right: 15px;
	}
	
	.tlw-integral li button {
		font-size: 18px;
		color: white;
		background: #f08200;
		padding: 5px 30px;
		border-radius: 18px;
		border: none;
		cursor: pointer;
	}
</style>