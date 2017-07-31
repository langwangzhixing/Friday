<template>
	<div>
		<bread-nav :route='route'></bread-nav>
		<div class="zh-kind">
			<dl class="zh-firstType">
				<dt>一级分类:</dt>
				<dd class="zh-all1">
					<span @click="allGet()">全部</span>
				</dd>
				<router-link :to='item.path' tag='dd' v-for="(item,index) in route" key='index' :class='item.title==firstType ? "zhactive": ""'>
					<span @click="itemGet(index,$event)">
						{{item.title}}
					</span>
				</router-link>
			</dl>
			<dl class="zh-secondType" v-show="bol">
				<dt id="dt">二级分类:</dt>
				<dd class="zh-all2">
					<span @click="secAllGet()">全部</span>
				</dd>
				<router-link :to='value.path' v-for="(value,index) in itemArr" tag='dd' key='index'>
					<span @click="secItemGet(index,$event)">
						{{value.title}}
					</span>
				</router-link>
			</dl>
			<div class="zh-srot">
				<dl class="zh-way">
					<dt>排序:</dt>
					<dd :class="'activebd'">销量从低到高</dd>
					<dd>价格从低到高</dd>
					<dd>评价从低到高</dd>
				</dl>
				<dl class="zh-filter">
					<dt>筛选:</dt>
					<dd :class="'activebg'">全部</dd>
					<dd>全国</dd>
					<dd>同城</dd>
					<dd>次日到达</dd>
				</dl>
			</div>
		</div>
		<more-goods :showGoods="showGoods"></more-goods>
	</div>
</template>

<script>
	import typeRoute from '../data/typeRoute.json';
	import breadNav from './breadNav';
	import moreGoods from './moreGoods';
	
	export default{
		data() {
			return {
				bol:false,
				itemArr:[],
				route:typeRoute.route,
				firstType:'',
				secondType:'',
				pushParams:{},
				goodsArr:[],
				showGoods:[]
				
			}
		},
		components:{
			breadNav,
			moreGoods
		},
		methods:{
			allGet(){
				this.bol = false;
				$('.zh-all1').addClass('zhactive');
				$('.zh-firstType dd').removeClass('router-link-active');
				this.pushParams = {firstType:"全部"};
				this.getData(this.pushParams);
			},
			itemGet(index,$event) {
				$('.zh-all1').removeClass('zhactive');
				$('.zh-all2').addClass('zhactive');
				$('.zh-firstType dd').removeClass('router-link-active');
				if (!this.bol) this.bol = !this.bol;
				this.itemArr = this.route[index].items;
				this.firstType = this.route[index].title;
				this.pushParams = {firstType:this.firstType};
				//调用后台请求函数
				this.getData(this.pushParams);
			},
			secAllGet(){
				$('.zh-all2').addClass('zhactive');
				$('.zh-secondType dd').removeClass('router-link-active');
				this.pushParams = {firstType:this.firstType};
				//调用后台请求函数
				this.getData(this.pushParams);
			},
			secItemGet(index,$event){
				$('.zh-all2').removeClass('zhactive');
				$('.zh-secondType dd').removeClass('router-link-active');
				this.secondType = this.itemArr[index].title;
				this.pushParams = {firstType:this.firstType, secondType:this.secondType};
				console.log(this.pushParams)
				
//				调用后台请求函数
				this.getData(this.pushParams);
			},
			getData(params){
				this.$http.get('/api/goods/more',{params:params}).then(function (res) {
					this.showGoods = res.data;
//					console.log(this.showGoods)
				});
			}
		},
		created(){
			var params = this.$route.query;
			this.firstType = params.firstType;
			//调用后台请求函数
			this.getData(params);
		},
		updated(){
			if (this.firstType || this.secondType) {
				localStorage.setItem('first',this.firstType);
				localStorage.setItem('second',this.secondType);
			}
		},
		activated(){
			var params = {firstType:localStorage.getItem('first'), secondType:localStorage.getItem('second')};
			this.getData(params);
		}
	}
</script>

<style scoped>
	
.zh-kind{
	width: 1280px;
	margin: 0 auto;
}
.zh-kind dl{
	overflow: hidden;
	border-bottom: 1px solid #ddd;
}
.zh-kind dt,.zh-kind dd{
	float: left;
	padding: 10px 15px;
	margin: 15px 10px;
	font-size: 14px;
}
.zh-srot{
	height: 60px;
	padding-top: 10px;
}
.zh-srot .zh-way{
	float: left;
	width: 600;
	border: none;
}
.zh-srot .zh-way dd{
	border: 1px solid #ddd;
}
.zh-kind .zh-srot .zh-filter{
	float: right;
	width: 435px;
	border: none;
}
.zh-srot .zh-filter dd{
	/*background-color: #4B943D;*/
}
.zhactive,.router-link-active,.zh-kind dd:hover{
	background-color: #4B943D;
	color: #fff;
	font-weight: 400;
}
.activebd,.zh-kind .zh-way dd:hover{
	background-color: #fff;
	border: 1px solid #4B943D;
	color: #4B943D;
}
</style>