<template>
	<div>
		<div class="shopping-cart" v-show="flag">
			<h2><span>&nbsp;</span>购物车</h2>
			<table>
				<tr>
					<th><input  @click="checkAll()" type="checkbox" :checked="checkAllFlag"/></th>
					<th>礼拜五生鲜</th>
					<th>规格</th>
					<th>数量</th>
					<th>单价</th>
					<th>金额</th>
					<th>操作</th>
				</tr>
				<tr v-for="(item,index) in data">
					<td><input type="checkbox" :checked="item.checkFlag" @click="check(item)"/></td>
					<td>
						<img :src='"static/imgs/"+item.img'/>
						<strong>{{item.title}}</strong>
					</td>
					<td>无</td>
					<td>
						<a href="javascript:;" @click="changeCount(index,-1,item.id)">-</a><input type="text" v-model="item.count"/><a href="javascript:;" @click="changeCount(index,1,item.id)">+</a>
					</td>
					<td>¥{{item.price}}</td>
					<td>¥{{item.price*item.count}}</td>
					<td><button @click="del(index,item.id)" class="delete">删除</button></td>
				</tr>
				<tr class="foot">
					<td colspan="7">
						<div class="total">
							<strong>商品金额</strong>
							<span>¥</span>
							<span>{{total}}</span>
						</div>
					</td>
				</tr>
			</table>
			<div class="footHandle">
				<button @click="checkAll()">全选</button>
				<button @click="delCount()">批量删除</button>
				<button class="buy">立即购买</button>
				<div class="total">
					<strong>商品金额</strong>
					<span>¥</span>
					<span>{{total}}</span>
				</div>
			</div>
			<bullet :tanMsg='tanMsg'></bullet>
		</div>
		<div class="carNull" v-show="!flag">
			<router-link to='/home'>
				<img src="../../../static/imgs/carNull.png"/>
			</router-link>
		</div>
	</div>
</template>

<script>
	import bullet from 'components/bullet';
	import router from '../../router';
	
	export default {
		data(){
			return{
				data:[],
				checkAllFlag:false,
				total:0,
				tanMsg:'删除成功',
				flag:true,
				idArr:[]
			}
		},
		components:{
			bullet
		},
		methods:{
			addShopping(flag,id){
				var phone = getCookie('fridayUser');
				if (phone){
					//flag 标记是加还是减 1 加 0 减
					this.$http.get('/api/user/addShop',{params:{phone:phone,id:id,flag:flag,count:1}}).then(function(res){
						if (res.bodyText=='1') {
							alert('添加成功');
						}
					});
				}else{
					alert("请先登录")
				}
			},
			changeCount(index,countFlag,id){
				var flag;
				if (countFlag>0){
					this.data[index].count++;
					flag = 1;
					var num = $('#shopCarCount').text()-0;
					$('#shopCarCount').text(++num)
				} 
				else {
					flag = 0;
					this.data[index].count--;
					var num = $('#shopCarCount').text()-0;
					$('#shopCarCount').text(--num)
				}
				
				
				if (this.data[index].count<1) {
					this.data[index].count = 1;
					alert('商品数量最少1个')
				}else{
					this.addShopping(flag,id);
				}
				this.calcTotal();
				
			
			},
			del(index,id){
				this.deldata(id);
				this.data.splice(index,1);
			},
			checkAll(){
				this.checkAllFlag = !this.checkAllFlag;
				this.data.forEach((item,index) => {
					if (typeof item.checkFlag == "undefined") {
						this.$set(item,'checkFlag',this.checkAllFlag);
					} else{
						item.checkFlag = this.checkAllFlag;
					}
				});
				this.calcTotal();
			},
			check(item){
				if (typeof item.checkFlag == "undefined") {
					this.$set(item,'checkFlag',true);
				} else{
					item.checkFlag = false;
				}
				this.calcTotal();
			},
			delCount(){
				this.idArr = [];
				this.delFunc();
				this.idArr.forEach((id) => {
					this.deldata(id);
				});
				
			},
			delFunc(){
				this.data.forEach((item,index) => {
					if (item.checkFlag) {
						this.idArr.push(item.id);
						this.data.splice(index,1);
						$(".bullet").fadeIn(500).delay(500).fadeOut();
						this.delFunc();
					}
				});
			},
			calcTotal(){
				this.total = 0;
				this.data.forEach((item,index) => {
					if (item.checkFlag == true) {
						this.total += item.price * item.count;
					}
				})
			},
			getCookie(name) {
			    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
			    return v ? v[2] : null;
			},
			deldata(id){
				var phone = localStorage.getItem('phone');
				this.$http.get('/api/user/delShop',{params:{phone:phone,id:id}}).then((res) => {
					if (res.bodyText=='1') {
						$(".bullet").fadeIn(500).delay(500).fadeOut();
						if (this.data.length==0) {
							this.flag = false;
						}
					}
				})
			},
			getdata(){
				this.data =[];
				localStorage.setItem('phone',this.getCookie('fridayUser'));
				var phone = localStorage.getItem('phone');
				if (phone) {
					this.$http.get('/api/user/cart',{params:{phone:phone}}).then((res) => {
						if (res.bodyText == 'nomsg') {
							this.flag = false;
						}else{
							this.flag = true;
							var data = JSON.parse(res.bodyText);
							for (var i = 0; i < data.goods.length; i++) {
								var obj = {id:data.goods[i].id,img:data.goods[i].images,title:data.goods[i].name,count:data.count[i],price:data.goods[i].price};
								this.data.push(obj);
							}
						}
					});
				}else{
					this.flag = false;
					alert("请登录");
				}
			}
		},
		created(){
			this.getdata();
		}
	}
</script>

<style lang="less" scoped>
	.bullet{
		position: absolute;
		top: 30%;
		left: 50%;
		display: none;
	}
	.carNull{
		width: 1280px;
		margin: 0 auto;
		text-align: center;
		padding: 200px 0;
	}
	.shopping-cart{
		position: relative;
		width: 1280px;
		margin: 0 auto;
		h2{
			font-size: 19px;
			color: #666;
			margin: 20px 0;
			span{
				display: inline-block;
				width: 20px;
				height: 18px;
				margin-right: 10px;
				background-image: url(../../images/8.png);
				background-size: cover;
			}
		}
		table{
			width: 1278px;
			border: 1px solid #ddd;
			tr:nth-of-type(1){
				background-color: #f2f2f2;
			}
			tr{
				border-bottom: 1px solid #ddd;
				th{
					line-height: 51px;
					font-size: 19px;
					font-weight: 600;
				}
				td{
					padding-top: 20px;
					padding-bottom: 20px;
					text-align: center;
				}
				th:nth-of-type(1),td:nth-of-type(1){
					width: 64px;
					text-align: center;
					input{
						width: 14px;
						height: 14px;
					}
				}
				th:nth-of-type(2),td:nth-of-type(2){
					width: 256px;
					color: #333;
					text-align: left;
					img{
						width: 80px;
						border: 1px solid #ddd;
						vertical-align: middle;
					}
					strong{
						padding-left: 5px;
					}
				}
				th:nth-of-type(3),td:nth-of-type(3){
					width: 192px;
				}
				th:nth-of-type(4),td:nth-of-type(4){
					width: 192px;
					a{
						display: inline-block;
						width: 28px;
						height: 28px;
						line-height: 25px;
						font-size: 28px;
						font-weight: 300;
						color: #333;
						background-color: #f2f2f2;
						border: 1px solid #ddd;
					}
					input{
						width: 38px;
						height: 24px;
						padding: 2px 5px;
						border: 1px solid #ddd;
						vertical-align: top;
						font-size: 18px;
						font-weight: 300;
						text-align: center;
					}
				}
				th:nth-of-type(5),td:nth-of-type(5){
					width: 320px;
				}
				th:nth-of-type(6),td:nth-of-type(6){
					width: 191px;
				}
				th:nth-of-type(7),td:nth-of-type(7){
					width: 64px;
					.delete{
						border: none;
						background-color: #fff;
						font-size: 14px;
					}
				}
			}
			.foot{
				height:69px;
				td{
					font-size: 18px;
				}
			}
		}
	}
	.footHandle{
		width: 1278px;
		margin: 50px 0;
		overflow: hidden;
		button{
			background-color: #FFFFFF;
			border: none;
			font-size: 14px;
			color: #4B943D;
			padding-top: 10px;
			margin-left: 20px;
			margin-right: 20px;
		}
		.total{
			padding-top: 10px;
		}
		.buy{
			float: right;
			width: 150px;
			font-size: 20px;
			height: 40px;
			background-color: #F08200;
			color: #fff;
			border-radius: 5px;
			padding: 0;
			margin: 0;
		}
	}
	.total{
			float:right;
			width: 300px;
			font-size: 18px;
			strong{
				color: #666;
			}
			span{
				color: red;
				font-size: 20px;
			}
			span:nth-of-type(1){
				margin-left: 20px;
			}
			span:nth-of-type(2){
				display: inline-block;
				width: 100px;
				text-align: left;
			}
		}
</style>