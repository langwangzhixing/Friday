<template>
	<div>
		<bread-nav></bread-nav>
		<div class="detail-lyc">
			<div class="detail-first-lyc">
				<div class="detail-first-left-lyc">
					<div class="left-lyc">
						<img :src='"static/imgs/"+data.images' class="zero" />
						<div class="first-left-lyc"></div>
					</div>
					<div class="first-left-bottom-lyc">
						<img src="../img/leftJT.png" class="first zh-frist" />
						<div class="zh-box">
							<img :src='"static/imgs/"+data.images' class="second one" />
						</div>
						<img src="../img/rightJT.png" class="first zh-frist" />
					</div>
				</div>
				<!--放大区域-->
				<div class="big-lyc">
					<img :src='"static/imgs/"+data.images' class="seven" />
				</div>
				<div class="detail-first-right-lyc">
					<span>{{data.name}}</span>
					<div class="first-right-seclect-lyc">
						<a href="javascript:void(0)" class="area">全国</a>
						<a href="javascript:void(0)" class="area">礼拜五</a>
						<a href="javascript:void(0)" class="area">次日达</a>
						<a href="javascript:void(0)" class="area">自营</a>
					</div>
					<div class="first-right-product-lyc">
						<div class="right-product-left-lyc">
							<img src="../img/orange.png" />
							<span>资深买家</span>
						</div>
						<p>雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传入我国。是中国三大石榴之一，粒大皮薄，汁多味甜爽口。雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传入我国。是中国三大石榴之一，粒大皮薄，汁多味甜爽口。</p>
					</div>
					<div class="first-right-price-lyc">
						<h3><span>现价&nbsp;&nbsp;:&nbsp;&nbsp;¥&nbsp;{{data.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>原价&nbsp;&nbsp;:&nbsp;&nbsp;¥{{data.oldPrice}}</span></h3>
						<h4>
							<span  class="price">请选择规格</span>
							<a href="javascript:void(0)">500g</a>
							<a href="javascript:void(0)">1000g</a>
							<a href="javascript:void(0)">2000g</a>
						</h4>
					</div>
					<div class="first-right-count-lyc">
						<span>数量&nbsp;&nbsp;:&nbsp;&nbsp;</span>
						<div class="count-lyc">
							<button>-</button><input type="text" value="1" class="input" /><button>+</button>
						</div>
						<span>件</span>
						<div class="right-count-button-lyc">
							<button @click="addShopping(data.id)">加入购物车</button>
							<button>立即购买</button>
						</div>
					</div>
					<div class="first-right-collect-lyc">
						<img src="../img/star2.png" />
						<img src="../img/star1.png" />
						<span>收藏此藏品</span>
						<span>分享到&nbsp;&nbsp;:&nbsp;&nbsp;</span>
						<div data-tag='1' class="bdsharebuttonbox">
							<a href="#" class="bds_more" data-cmd="more"></a>
							<a href="#" class="bds_qzone" data-cmd="qzone"></a>
							<a href="#" class="bds_tsina" data-cmd="tsina"></a>
							<a href="#" class="bds_tqq" data-cmd="tqq"></a>
							<a href="#" class="bds_renren" data-cmd="renren"></a>
							<a href="#" class="bds_weixin" data-cmd="weixin"></a>
						</div>
					</div>
				</div>
			</div>
			<div class="detail-product-lyc" >
				<div class="detail-product-nav-lyc">
					<a @click="change" class="change">商品详情</a><a @click="change">商品评价</a>
				</div>
				<!--商品详情-->
				<div v-show="bool">
					<div class="product-detail-lyc" >
						<p>男式衬衫</p>
						<p>明水礼盒十分优秀,是送朋友,送亲人的不二选择</p>
						<p>什么,你还不知道明水礼盒,今年过年不收礼,收礼只收明水礼盒,OUT了吧,赶紧买起礼盒送亲朋,送好友吧.</p>
						<p>完成交易.如有剩余库存,从新上架产品</p>
						<img src="../img/hamigua.png" />
					</div>
					<div class="product-detail-lyc">
						<p>男式衬衫</p>
						<p>明水礼盒十分优秀,是送朋友,送亲人的不二选择</p>
						<p>什么,你还不知道明水礼盒,今年过年不收礼,收礼只收明水礼盒,OUT了吧,赶紧买起礼盒送亲朋,送好友吧.</p>
						<p>完成交易.如有剩余库存,从新上架产品</p>
						<img src="../img/hamigua.png" />
					</div>
				</div>
				<!--商品评价-->
				<div class="product-evaluate-lyc" v-show="!bool">
					<div class="evaluate-first-lyc">
						<div class="evaluate-first-left-lyc">
							<img src="../img/photo.png" />
							<em>158****0203</em>
						</div>
						<div class="evaluate-first-middle-lyc">
							<div class="first-middle-top-lyc">
								<img src="../img/star2.png" />
								<img src="../img/star2.png" />
								<img src="../img/star2.png" />
								<img src="../img/star2.png" />
								<img src="../img/star1.png" />
								<em>帮同事买的,很不错,性价比高</em>
							</div>
							<div class="first-middle-bottom-lyc">
								<img src="../img/huang.png" />
								<img src="../img/huang.png" />
								<img src="../img/huang.png" />
								<img src="../img/huang.png" />
							</div>
						</div>
						<div class="evaluate-first-right-lyc">
							<em>2016-08-22&nbsp;&nbsp;&nbsp;&nbsp;20:45:01 </em>
						</div>
					</div>
					<div class="evaluate-second-lyc">
						<div class="evaluate-first-left-lyc">
							<img src="../img/photo.png" />
							<em>158****0203</em>
						</div>
						<div class="evaluate-first-middle-lyc">
							<div class="first-middle-top-lyc">
								<img src="../img/star2.png" />
								<img src="../img/star2.png" />
								<img src="../img/star2.png" />
								<img src="../img/star2.png" />
								<img src="../img/star2.png" />
								<em>帮同事买的,很不错,性价比高</em>
							</div>
						</div>
						<div class="evaluate-first-right-lyc">
							<em>2016-08-22&nbsp;&nbsp;&nbsp;&nbsp;20:45:01 </em>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import breadNav from './breadNav'
	import router from '../router'

	export default {
		data(){
			return {
				bool:true,
				data:{}
			}
		},
		methods:{
			change(ev)	{
				this.bool = !this.bool;
				$('.detail-product-nav-lyc a').removeClass('change');
				$(ev.target).addClass('change');
			},
			addShopping(id){
				var phone = getCookie('fridayUser');
				var count = $('.input').val();
				if (phone){
					//flag 标记是加还是减 1 加 0 减
					this.$http.get('/api/user/addShop',{params:{phone:phone,id:id,flag:1,count:count}}).then(function(res){
						if (res.bodyText=='1') {
							router.go(0)
							alert('添加成功');
						}
					});
				}else{
					alert("请先登录")
				}
			}
		},
		components: {
			breadNav
		},
		created(){
			var id = this.$route.query.id;
			this.$http.get('/api/goods/detail?id='+id).then(function (res) {
				this.data = res.data[0];
			});
		},
		activated(){
			var id = this.$route.query.id;
			this.$http.get('/api/goods/detail?id='+id).then(function (res) {
				this.data = res.data[0];
			});
		},
		mounted() {
			var index = 0;
			//点击图片放大显示
			$(".second").each(function(i, e) {
				$(e).click(function() {
					$('.left-lyc img').attr('src', $(e).attr('src'));
					$('.big-lyc img').attr('src', $(e).attr('src'));
					$(".second").removeClass("one");
					$(".second").eq(i).addClass("one");
				})
			})
			//点击左右按钮
			//点击左按钮
			$(".first:eq(0)").click(function() {
				if(index <= 0) {
					index = 3;
				} else {
					index--;
				}
				$(".second").removeClass("one");
				$(".second").eq(index).addClass("one");
				//展示区域和放大区域
				$('.left-lyc img').attr('src', $(".second").eq(index).attr('src'));
				$('.big-lyc img').attr('src', $(".second").eq(index).attr('src'));
			})
			//点击右键
			$(".first:eq(1)").click(function() {
				if(index >= 3) {
					index = 0
				} else {
					index++;
				}
				$(".second").removeClass("one");
				$(".second").eq(index).addClass("one");
				//展示区域和放大区域
				$('.left-lyc img').attr('src', $(".second").eq(index).attr('src'));
				$('.big-lyc img').attr('src', $(".second").eq(index).attr('src'));
			});
			//放大镜
			var small = document.getElementsByClassName("left-lyc")[0];
			var big = document.getElementsByClassName("big-lyc")[0];
			var zoom = document.getElementsByClassName("first-left-lyc")[0];
			var bigImg = document.getElementsByClassName("seven")[0];
			small.onmousemove = function(e) {
				var even = e || event;
				//滚轮高度      
				var st;
				if(document.body.scrollTop){
					st = document.body.scrollTop;//获取谷歌的滚轮高度
				}else{
					st = document.documentElement.scrollTop;//获取火狐的滚轮高度
				};
				var x = even.clientX - zoom.offsetWidth / 2 - $('.left-lyc').offset().left;
				var y = even.clientY - zoom.offsetHeight / 2 - $('.left-lyc').offset().top +st;
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

			//右边区域选择
			//右边点击字体变色
			$(".first-right-seclect-lyc a").click(function(ev) {
				//	console.log($(this).index())
				$(".first-right-seclect-lyc a").css("background", "#3b7e2e");
				$(this).css("background", "#f08200");
			})

			//右边重量选择
			//重量点击变色
			$(".first-right-price-lyc a").click(function(ev) {
				//	console.log($(this).index())
				$(".first-right-price-lyc a").css("background", "#fff");
				$(this).css("background", "#b6e601");
			})

			//购物车数量的改变
			var i = 1;
			//点击减号
			$(".count-lyc button").eq(0).click(function() {
				//	console.log(000);
				if(i == 1) return;
				$(".input").val(--i);
			});
			//点击加号
			$(".count-lyc button").eq(1).click(function() {
				//	console.log(000);
				$(".input").val(++i);
			});
		}
	}
</script>

<style scoped>
	
	.zh-box{
		display: inline-block;
		width: 440px;
		padding-left: 10px;
		box-sizing: border-box;
	}
	button{outline: none;border: none;}
	.detail-lyc {
		width: 1280px;
		margin: 0 auto;
		margin-top: 22px;
	}
	
	.detail-first-lyc {
		height: 631px;
		/*border: 1px solid;*/
		position: relative;
	}
	
	.detail-first-left-lyc {
		width: 500px;
		height: 631px;
		/*border: 1px solid;*/
	}
	
	.first-left-bottom-lyc {
		margin-top: 38px;
	}
	.first-left-bottom-lyc>.zh-frist{
		width: 20px;
		height: 40px;
		cursor: pointer;
		padding-bottom: 20px;
	}
	
	.first-left-bottom-lyc img.second {
		float: left;
		width: 75px;
		height: 75px;
		margin-right: 25px;
		border: 3px solid transparent;
	}
	
	.first-left-bottom-lyc img.one {
		border: 3px solid #f08200;
	}
	
	.big-lyc {
		width: 300px;
		height: 300px;
		border: 1px solid #ccc;
		position: absolute;
		left: 540px;
		top: 0;
		overflow: hidden;
		z-index: 5;
		display: none
	}
	
	.left-lyc {
		width: 500px;
		height: 500px;
		position: relative
	}
	
	.left-lyc img {
		width: 500px;
		height: 500px;
		/*border: 1px solid #ccc;*/
	}
	
	.first-left-lyc {
		width: 100px;
		height: 100px;
		background: #fff;
		opacity: .3;
		position: absolute;
		left: 0;
		top: 0;
		display: none;
		cursor: move;
	}
	
	.seven {
		width: 600px;
		height: 600px;
	}
	
	.detail-first-right-lyc {
		position: absolute;
		width: 740px;
		height: 631px;
		right: 0;
		top: 0;
	}
	
	.detail-first-right-lyc span {
		display: inline-block;
		font-size: 24px;
		margin-top: 18px;
		margin-bottom: 18px;
	}
	
	.first-right-seclect-lyc a {
		display: inline-block;
		height: 27px;
		line-height: 27px;
		background: #3b7e2e;
		color: #fff;
		font-size: 16px;
		padding: 0 16px;
	}
	
	.area {
		margin-right: 20px;
	}
	
	.first-right-seclect-lyc a:nth-child(2) {
		background: #f08200;
	}
	
	.first-right-product-lyc {
		margin-top: 25px;
		border-top: 1px solid #ededed;
		border-bottom: 1px solid #ededed;
		height: 184px;
		overflow: hidden;
	}
	
	.right-product-left-lyc {
		float: left;
		width: 119px;
		margin-top: 20px;
		margin-left: 13px;
	}
	
	.right-product-left-lyc span {
		display: inline-block;
		font-size: 16px;
		width: 110px;
		height: 33px;
		background: #ffe313;
		border-radius: 17px;
		line-height: 33px;
		text-align: center;
		margin-top: 10px;
	}
	
	.first-right-product-lyc p {
		font-size: 16px;
		color: #b3b3b3;
		margin-left: 152px;
		margin-top: 40px;
	}
	
	.first-right-price-lyc h3 span:first-child {
		color: #ff5757;
	}
	
	.first-right-price-lyc h3 span:last-child {
		font-size: 15px;
		color: #666;
		text-decoration: line-through;
	}
	
	.first-right-price-lyc h4 a {
		font-size: 16px;
		display: inline-block;
		width: 85px;
		height: 34px;
		line-height: 34px;
		text-align: center;
		font-size: 16px;
		border: 1px solid #d4d4d4;
		margin-right: 23px;
		background: #fff;
	}
	
	.first-right-price-lyc h4 span {
		border: none;
		font-size: 16px;
		display: inline-block;
		margin-right: 23px;
	}
	
	.first-right-price-lyc h4 a span:hover {
		background: #baeab1;
	}
	
	.first-right-count-lyc {
		margin-top: 94px;
	}
	
	.count-lyc {
		display: inline-block;
	}
	
	.first-right-count-lyc span {
		display: inline-block;
		font-size: 16px;
	}
	
	.count-lyc button {
		width: 34px;
		height: 34px;
		background: #f2f2f2;
		cursor: pointer;
		font-size: 24px;
	}
	
	.count-lyc input {
		width: 71px;
		height: 30px;
		text-align: center;
		border: 1px solid #f2f2f2;
		vertical-align: top;
		font-size: 18px;
	}
	
	.right-count-button-lyc {
		display: inline-block;
		margin-left: 40px;
	}
	
	.right-count-button-lyc button {
		width: 150px;
		height: 45px;
		font-size: 20px;
		color: #fff;
		border-radius: 3px;
		cursor: pointer;
	}
	
	.right-count-button-lyc button:first-child {
		margin-right: 20px;
		background: #ffae4f;
	}
	
	.right-count-button-lyc button:last-child {
		background: #f08200;
	}
	
	.first-right-collect-lyc {
		margin-top: 30px;
	}
	
	.bdsharebuttonbox {
		display: inline-block;
		margin-left: 10px;
		vertical-align: top;
	}
	
	.first-right-collect-lyc img {
		margin-right: 10px;
		vertical-align: top;
	}
	
	.first-right-collect-lyc span {
		font-size: 16px;
		line-height: 25px;
		margin: 0 0 0 10px;
	}
	
	.detail-product-lyc {
		width: 1280px;
		border: 1px solid #f2f2f2;
		border-top: none;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	
	.detail-product-nav-lyc {
		height: 50px;
		background: #f4f4f4;
		/*border: 1px solid #d3d3d3;*/
		border-bottom: none;
	}
	
	.detail-product-lyc a {
		display: inline-block;
		width: 127px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border: 1px solid #e4e4e4;
		font-size: 18px;
		margin-top: -2px;
	}
	
	.detail-product-lyc .change {
		background: #fff;
		border-top: 2px solid #498e3d;
		border-left: none;
		border-right: none;
		border-bottom: none;
		color: #498e3d;
	}
	/*.detail-product-lyc a:last-child {
	background: #fff;
	border-top: 2px solid #498e3d;
	border-left: none;
	border-bottom: none;
	color: #498e3d;
}*/
	
	.product-detail-lyc {
		width: 1200px;
		margin: 0 auto;
		margin-top: 40px;
		/*display: none;*/
	}
	
	.product-detail-lyc p {
		font-size: 18px;
		color: #adadad;
		margin-bottom: 20px;
	}
	
	.product-detail-lyc p:first-child {
		color: #ec6a17;
	}
	
	.product-detail-lyc img {
		margin-bottom: 40px;
	}
	
	.product-evaluate-lyc {
		width: 1240px;
		margin: 0 auto;
		/*display: none;*/
	}
	
	.evaluate-first-lyc {
		height: 178px;
		border-bottom: 1px solid #e9e9e9;
		overflow: hidden;
	}
	
	.evaluate-second-lyc {
		height: 154px;
		border-bottom: 1px solid #e9e9e9;
		overflow: hidden;
		margin-bottom: 40px;
	}
	
	.evaluate-first-left-lyc,
	.evaluate-first-middle-lyc {
		float: left;
	}
	
	.evaluate-first-left-lyc img {
		margin-top: 20px;
		margin-left: 20px;
	}
	
	.evaluate-first-left-lyc em {
		display: block;
		font-size: 14px;
		margin-left: 26px;
		margin-top: 10px;
	}
	
	.evaluate-first-middle-lyc {
		margin-left: 20px;
		margin-top: 28px;
	}
	
	.evaluate-first-middle-lyc em {
		display: block;
		font-size: 16px;
		line-height: 48px;
	}
	
	.first-middle-bottom-lyc img {
		width: 57px;
		height: 57px;
		border: 3px solid #d4d4d4;
		margin-right: 10px;
	}
	
	.first-middle-bottom-lyc img:first-child {
		border: 3px solid #ec6a17;
	}
	
	.evaluate-first-right-lyc {
		float: right;
	}
	
	.evaluate-first-right-lyc em {
		display: inline-block;
		font-size: 15px;
		color: #a7a7a7;
		margin-top: 30px;
		margin-right: 22px;
	}
</style>