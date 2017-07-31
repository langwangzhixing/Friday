<template>
	<div>
		<div class="tlw-more-things">
			<ul class="tlw-more-products" v-show="showGoods[0].name?true:false">
				<li v-for="(item,index) in showGoods" v-show="item.name?true:false" v-if="pages(index)">
					<router-link :to="{path:'/detail',query:{id:item.id}}">
						<img :src='"/static/imgs/"+item.images' />
						<h3>{{item.name}}</h3>
					</router-link>
					<p>￥{{item.price}}<strong>￥{{item.oldPrice}}</strong></p>
					<img class="tlw-shoppingCar" src="../images/8.png" @click="addShopping(item.id)"/>
				</li>
			</ul>
			<div class="zh-nogoods" v-show="showGoods[0].name?false:true">
				<img src="/static/imgs/no-goods.png" />
			</div>
			<div class="tlw-page-bar">
				<ul>
					<li v-show="current != 1" @click="current-- && goto(current)">上一页</li>
					<li v-for="ind in num" @click="goto(ind)" :class="{'active':current == ind}">{{ind}}</li>
					<li v-show="num != current && num != 0 " @click="current++ && goto(current++)">下一页</li>
					<li v-show="num != current && num != 0">共{{num}}页</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		props: ["showGoods"],
		data() {
			return {
				num: 0,
				showItem: 5,
				current: 1,
				showNum: 20,
			}
		},
		methods: {
			pages(index){
				this.num = Math.floor(this.showGoods.length / this.showNum)
				var start = this.showNum*(this.current-1)
				var end = this.showNum*this.current;
				if(index>=start&&index<end){
					return true;
				}else{
					return false;
				}

			},
			goto(ind) {
				this.current = ind;
			},
			page() {
				var pag = [];
				if(this.current < this.showItem) { //如果当前的激活的项 小于要显示的条数
					//总页数和要显示的条数那个大就显示多少条
					var i = Math.min(this.showItem, this.num);
					while(i) {
						pag.unshift(i--);
					}
				} else { //当前页数大于显示页数了
					var middle = this.current - Math.floor(this.showItem / 2), //从哪里开始
						i = this.showItem;
					if(middle > (this.num - this.showItem)) {
						middle = (this.num - this.showItem) + 1
					}
					while(i--) {
						pag.push(middle++);
					}
				}
				return pag;
			},
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

<style scoped>
	.zh-nogoods {
		margin: 50px auto;
	}
	
	.tlw-more-things {
		width: 1280px;
		margin: 20px auto;
	}
	
	.tlw-more-products {
		overflow: hidden;
	}
	
	.tlw-more-products li {
		width: 303px;
		height: 395px;
		border: 1px solid #CCCCCC;
		float: left;
		margin: 20px 20px 20px 0;
		position: relative;
	}
	
	.tlw-more-products li:hover {
		border: 1px solid green;
	}
	
	.tlw-more-products li:nth-of-type(4n) {
		margin-right: 0;
	}
	
	.tlw-more-products li img {
		width: 100%;
	}
	
	.tlw-more-products li h3 {
		color: black;
		font-size: 20px;
		padding: 20px 0 15px 20px;
	}
	
	.tlw-more-products li p {
		color: red;
		font-size: 20px;
		padding-left: 20px;
	}
	
	.tlw-more-products li strong {
		color: #666666;
		font-size: 16px;
		padding: 10px;
		text-decoration: line-through;
	}
	
	.tlw-more-products li .tlw-shoppingCar {
		width: 34px;
		height: 30px;
		position: absolute;
		bottom: 10px;
		right: 20px;
	}
	
	.tlw-page-bar ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.tlw-page-bar ul li {
		cursor: pointer;
		border: 1px solid green;
		border-radius: 6px;
		padding: 5px 10px;
		margin: 0 5px;
	}
	
	.tlw-page-bar ul li.active {
		background: #0E90D2;
		color: #fff;
	}
</style>