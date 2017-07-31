<template>
	<div id="tlw-homeGoods">
		<!--商品详情-->
		<!--礼拜五-->
		<div class="tlw-product-details">
			<div class="tlw-friday">
				<img src="../images/5.png" />
				<h2>礼拜五</h2>
				<b>friday</b>
				<div class="tlw-over">
					<p>距离结束</p>
					<span class="tlw-day">00</span><span class="tlw-h">00</span><strong>:</strong><span class="tlw-m">00</span><strong>:</strong><span class="tlw-s">00</span>
					<router-link to='/friday'>更多</router-link>
				</div>

			</div>
			<ul class="zh-friday">
				<li v-for="item in friday">
					<router-link :to="{path:'detail',query:{id:item.id}}">
						<img :src='"static/imgs/"+item.images' />
					</router-link>
					<h3>{{item.name}}</h3>
					<p>礼拜五价：<strong>￥{{item.price}}</strong></p>
				</li>
			</ul>
		</div>
		<div class="tlw-fruits" v-for="item in allType">
			<div class="tlw-fresh-fruits">
				<img src="../img/5.png" />
				<h2>{{item.title}}</h2>
				<!--<b>{{}}</b>-->
				<div class="tlw-more">
					<router-link :to="{path:'home/all',query:{firstType:item.title}}">更多</router-link>
				</div>
			</div>
			<ul>
				<li v-for="val in item.count" v-show="val.name?true:false">
					<router-link :to="{path:'detail',query:{id:val.id}}">
						<img :src='"static/imgs/"+val.images' />
					</router-link>
					<router-link :to="{path:'detail',query:{id:val.id}}">
						<h3>{{val.name}}</h3>
					</router-link>
					<p>￥{{val.price}}<strong>￥{{val.oldPrice}}</strong></p>
					<!--购物车-->
					<img @click="addShopping(val.id)" class="tlw-shoppingCar" src="../images/8.png" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				friday:[],
				allType:[],
				kinds:[
					{kind:'新鲜水果',items:['水果礼盒','进口水果','有机水果','国产水果']},
					{kind:'田园蔬菜',items:['蔬菜礼篮','有机蔬菜','地产蔬菜','进口蔬菜']},
					{kind:'肉食家禽',items:['羊肉','牛肉','鸡鸭肉','鱼肉']},
					{kind:'海鲜水产',items:['海鲜礼盒','国产海鲜','进口海鲜','干货其他']},
					{kind:'优选食材',items:['优选米面','优选杂粮','粮油调味','其他食材']},
					{kind:'零食酒水',items:['零食','特色干果','休闲冲饮','茶叶','白酒','啤酒','葡萄酒','其他酒品']},
					{kind:'蛋奶速食',items:['方便速食','奶制品','面包甜点','蛋品']},
					{kind:'全球代购',items:['保健品','洗护用品','农副产品','母婴用品']}
				],
			}
		},
		created(){
			this.$http.get("/api/goods").then(function (res) {
				this.friday = res.data.friday;
				this.allType = res.data.type;
//				console.log(this.friday)
//				console.log(this.allType)
			});
		},
		methods:{
			addShopping(id){
				var phone = getCookie('fridayUser');
				if (phone){
					//flag 标记是加还是减 1 加 0 减
					this.$http.get('/api/user/addShop',{params:{phone:phone,id:id,flag:1,count:1}}).then(function(res){
						if (res.bodyText=='1') {
							var num = $('#shopCarCount').text()-0;
							$('#shopCarCount').text(++num)
							alert('添加成功');
						}
					});
				}else{
					alert("请先登录")
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.zh-friday{
	height: 433px;
	li{
		float: left;
		margin-right: 20px;
	}
	li:last-of-type{
		margin-right: 0;
	}
}	
	/*商品详情*/
.tlw-product-details .tlw-friday,
.tlw-fruits .tlw-fresh-fruits {
	height: 100px;
	background: #ebffe8;
	border-bottom: 1px solid green;
	padding: 0 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
}

.tlw-product-details .tlw-friday img,
.tlw-fruits .tlw-fresh-fruits img {
	width: 36px;
	height: 40px;
}

.tlw-product-details .tlw-friday h2,
.tlw-fruits .tlw-fresh-fruits h2 {
	font-size: 30px;
	color: #69a55f;
	padding: 0 15px;
}

.tlw-product-details .tlw-friday b,
.tlw-fruits .tlw-fresh-fruits b {
	font-size: 20px;
	color: #999999;
	font-weight: 300;
	margin-top: 10px;
}

.tlw-product-details .tlw-friday .tlw-over {
	display: flex;
	flex-direction: row;
	align-items: center;
	position: absolute;
	right: 30px;
}

.tlw-product-details .tlw-friday .tlw-over p,
.tlw-product-details .tlw-friday .tlw-over a {
	font-size: 22px;
	color: #69a55f;
}

.tlw-product-details .tlw-friday .tlw-over a {
	margin-left: 20px;
}

.tlw-product-details .tlw-friday .tlw-over span {
	display: inline-block;
	width: 60px;
	height: 42px;
	background: #f08200;
	margin: 0 5px;
	border-radius: 6px;
	color: white;
	font-size: 22px;
	text-align: center;
	line-height: 42px;
}

.tlw-product-details .tlw-friday .tlw-over strong {
	margin: 0 5px;
	color: #f08200;
}

.tlw-product-details ul {
	height: 433px;
	margin-top: 20px;
	margin-bottom: 20px;
}

.tlw-product-details ul li {
	width: 305px;
	height: 433px;
	background: #f7f5f6;
	text-align: center;
	border: 1px solid #f7f5f6;
}

.tlw-product-details ul li:hover,
.tlw-fruits ul li:hover {
	border: 1px solid green;
}

.tlw-product-details ul li img {
	width: 285px;
	height: 285px;
	padding-top: 5px;
}

.tlw-product-details ul li h3 {
	padding: 15px 0;
}

.tlw-product-details ul li p {
	font-size: 20px;
	color: #f08200;
}

.tlw-product-details ul li strong {
	color: #ff5757;
}
.tlw-fruits .tlw-fresh-fruits .tlw-more {
	position: absolute;
	right: 30px;
}

.tlw-fruits .tlw-fresh-fruits .tlw-more a {
	font-size: 22px;
	color: #69a55f;
}

.tlw-fruits ul {
	margin: 20px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	/*background: pink;*/
}

.tlw-fruits ul li {
	width: 305px;
	height: 395px;
	border: 1px solid #CCCCCC;
	position: relative;
}

.tlw-fruits ul li img {
	width: 100%;
}

.tlw-fruits ul li h3 {
	padding: 10px 0 10px 20px;
}

.tlw-fruits ul li p {
	color: red;
	font-size: 20px;
	padding-left: 20px;
}

.tlw-fruits ul li strong {
	color: #666666;
	font-size: 16px;
	padding: 10px;
	text-decoration: line-through;
}

.tlw-fruits ul li .tlw-shoppingCar {
	width: 34px;
	height: 30px;
	position: absolute;
	bottom: 10px;
	right: 20px;
}
</style>