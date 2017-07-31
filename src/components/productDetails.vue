<template>
	<div>
		<div class="tlw-products-top">
			<div class="tlw-magnifying-glass">
				<div class="show">
					<!--原图-->
					<img :src='"../images/"+img+""'/>
					<!--放大镜区域-->
					<div id="zoom" ></div>
				</div>
				<!--右侧放大图-->
				<div class="big">
					<img :src='"../images/"+img+""' class="zh-big"/>
				</div>
			</div>
			<div class="tlw-particulars">
				<h2>洗涤服务</h2>
				<div class="tlw-particulars-wash">
					<p>营业时间：<em>￥69/人</em></p>
					<p>13649902136</p>
					<p>礼拜五商城</p>
				</div>
				<h4>商家公告</h4>
			</div>
			<div class="tlw-grade">
				<img src="../images/parter.png" />
				<p>综合评分：<span></span><em>5分</em></p>
				<ul>
					<li>
						<h6>描述</h6>
						<strong>5分</strong>
					</li>
					<li>
						<h6>商品</h6>
						<strong>5分</strong>
					</li>
					<li>
						<h6>服务</h6>
						<strong>5分</strong>
					</li>
				</ul>
			</div>
		</div>
		<div class="tlw-classify-nav">
			<p>分类：</p>
			<a class="tlw-active" href="">全部</a>
			<a href="">大衣</a>
			<a href="">裤子</a>
			<a href="">地毯</a>
		</div>
		<ul class="tlw-things">
			<li>
				<router-link to='/nofind'>
					<img :src='"../images/"+img+""' />
				</router-link>
				<h3>羊绒大衣</h3>
				<span>洗干净</span>
				<p>￥1<strong>￥35</strong></p>
				<img class="tlw-shoppingCar" src="../images/8.png" />
			</li>
		</ul>
	</div>
</template>

<script>
	import server from '../data/server.json';
	export default {
		data(){
			return{
				service:server.kinds,
				img:''
			}
		},
		created(){
			var title = this.$route.query.title;
			for (var i = 0; i < this.service.length; i++) {
				if(this.service[i].title==title){
					this.img = this.service[i].images;
				}
			}
		},
		activated(){
			var title = this.$route.query.title;
			for (var i = 0; i < this.service.length; i++) {
				if(this.service[i].title==title){
					this.img = this.service[i].images;
				}
			}
		},
		mounted(){
			//放大镜
			var small = document.getElementsByClassName("show")[0];
			var big = document.getElementsByClassName("big")[0];
			var zoom = document.getElementById('zoom');
			var bigImg = document.getElementsByClassName("zh-big")[0];
			small.onmousemove = function(e) {
				var even = e || event;
				//滚轮高度      
				var st;
				if(document.body.scrollTop){
					st = document.body.scrollTop;//获取谷歌的滚轮高度
				}else{
					st = document.documentElement.scrollTop;//获取火狐的滚轮高度
				};
				var x = even.clientX - zoom.offsetWidth / 2 - $('.show').offset().left;
				var y = even.clientY - zoom.offsetHeight / 2 - $('.show').offset().top +st;
				//水平方向的left最大临界值
				var maxX = small.clientWidth - zoom.clientWidth;
				if(x < 0) {
					x = 0
				}
				if(x > maxX) {
					x = maxX
				}
				//竖直方向的top最大临界值
				var maxY = small.clientHeight - zoom.clientHeight;
				if(y < 0) {
					y = 0
				}
				if(y > maxY) {
					y = maxY
				}
				zoom.style.left = x + "px";
				zoom.style.top = y + "px";
				var bigImgX = (x / maxX) * (bigImg.offsetWidth - big.clientWidth);
				var bigImgY = (y / maxY) * (bigImg.offsetHeight - big.clientHeight);

				//切记要给小的赋值,不能给bigImg.scrollLeft = bigImgX 这样写
				big.scrollLeft = bigImgX;
				big.scrollTop = bigImgY;
			}
			//为小图区域添加鼠标移入移出事件
			small.onmouseenter = function() {
				zoom.style.display = "block";
				big.style.display = "block";
			}
			small.onmouseleave = function() {
				zoom.style.display = "none";
				big.style.display = "none";
			}
		}
	}
</script>

<style scoped>

.tlw-products-top {
	width: 1280px;
	margin: 20px auto;
	display: flex;
	flex-direction: row;
}

.tlw-magnifying-glass {
	position: relative;
	height: 276px;
	background: pink;
}

.tlw-magnifying-glass .show {
	position: relative;
	width: 500px;
	height: 276px;
}

.tlw-magnifying-glass .show img {
	width: 500px;
	height: 276px;
}

.tlw-magnifying-glass .big {
	position: absolute;
	left: 510px;
	top: 0;
	width: 300px;
	height: 300px;
	display: none;
	/*右侧展示大图区域  超出隐藏*/
	overflow: hidden;
}

.tlw-magnifying-glass .big>img {
	position: absolute;
}

.tlw-magnifying-glass #zoom {
	position: absolute;
	left: 0;
	top: 0;
	width: 100px;
	height: 100px;
	background: rgba(175, 175, 175, 0.6);
	display: none;
}

.tlw-particulars {
	width: 402px;
	height: 316px;
	/*background: pink;*/
	margin: 0 40px 0 38px;
}

.tlw-particulars h2 {
	font-size: 24px;
	padding: 20px 0;
	font-weight: 500;
}

.tlw-particulars h4 {
	font-size: 18px;
	padding: 25px 0;
	font-weight: 500;
}

.tlw-particulars-wash {
	border-top: 1px solid #cccccc;
	border-bottom: 1px solid #cccccc;
}

.tlw-particulars-wash p {
	background: burlywood;
	line-height: 55px;
	text-indent: 1.5rem;
	font-size: 17px;
	font-weight: 500;
	color: #66666b;
}

.tlw-particulars-wash p em {
	color: sandybrown;
	font-size: 18px;
	margin-left: 5px;
}

.tlw-particulars-wash p:nth-of-type(1) {
	background: url(../images/tu1.png) no-repeat;
	background-size: 18px 18px;
	background-position: left center;
}

.tlw-particulars-wash p:nth-of-type(2) {
	background: url(../images/tu2.png) no-repeat;
	background-size: 14px 18px;
	background-position: left center;
}

.tlw-particulars-wash p:nth-of-type(3) {
	background: url(../images/tu3.png) no-repeat;
	background-size: 14px 18px;
	background-position: left center;
}

.tlw-grade {
	width: 300px;
	height: 316px;
	background: #f4fff2;
	position: relative;
}

.tlw-grade img {
	width: 45px;
	height: 55px;
	position: absolute;
	top: 0;
	right: 0;
}

.tlw-grade p {
	color: #666666;
	font-size: 14px;
	position: absolute;
	top: 94px;
	left: 20px;
}

.tlw-grade span {
	display: inline-block;
	width: 90px;
	height: 7px;
	background: #f08200;
	margin: 0 10px;
}

.tlw-grade ul {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 150px;
}

.tlw-grade ul li h6 {
	color: #666666;
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 10px;
}

.tlw-grade ul li {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.tlw-grade ul li:nth-of-type(2) {
	border-left: 2px dashed #cccccc;
	border-right: 2px dashed #cccccc;
	padding: 0 30px;
	margin: 0 -20px;
}

.tlw-grade ul li strong {
	color: #ff7c4e;
}

.tlw-classify-nav {
	width: 1280px;
	height: 58px;
	margin: 0 auto;
	border-top: 1px solid #cccccc;
	border-bottom: 1px solid #cccccc;
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 13px;
}

.tlw-classify-nav a {
	color: black;
	margin: 0 8px;
	padding: 5px 8px;
}

.tlw-classify-nav .tlw-active,
.tlw-classify-nav a:hover {
	background: #4b943d;
	color: white;
}

.tlw-things {
	width: 1280px;
	margin: 20px auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.tlw-things li {
	width: 305px;
	height: 395px;
	border: 1px solid #CCCCCC;
	position: relative;
}

.tlw-things li:hover {
	border: 1px solid green;
}

.tlw-things li img {
	width: 100%;
}

.tlw-things li h3 {
	padding: 10px 0 0 20px;
}

.tlw-things li span {
	display: inline-block;
	color: #666666;
	font-size: 12px;
	padding: 10px 0 10px 20px;
}

.tlw-things li p {
	color: red;
	font-size: 18px;
	padding-left: 20px;
}

.tlw-things li strong {
	color: #666666;
	font-size: 15px;
	padding: 10px;
	text-decoration: line-through;
}

.tlw-things li .tlw-shoppingCar {
	width: 34px;
	height: 30px;
	position: absolute;
	bottom: 10px;
	right: 20px;
}
</style>