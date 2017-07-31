<template>
	<div>
		<div class="tabbar">
			<strong>您当前的位置:</strong>
			<!--<router-link to='/home'>
				<span>首页</span>
				<em>></em>
			</router-link>-->
			<router-link :to="item.path" v-for="(item, index) in navTitle" key='index'>
				<span>{{item.title}}</span>
				<em v-if="index==navTitle.length-1 ? false : true">></em>
			</router-link>
		</div>
	</div>
</template>

<script>
	import router from '../router';
	
	export default{
		props:['route'],
		data() {
			return {
				navTitle:[],
				mapArr:[],
				mapArr1:[
//					{path:'',title:'首页'},
					{path:'footOne',title:'优先保证'},
					{path:'footTwo',title:'全程监控'},
					{path:'footThree',title:'礼拜五特惠'},
					{path:'footFour',title:'基地直供'},
					{path:'footFive',title:'优先准时送达保证'},
					
					{path:'home',title:'首页'},
					{path:'all',title:'全部商品'},
					
					
					{path:'local',title:'同城'},
					{path:'friday',title:'礼拜五'},
					{path:'integral',title:'积分商城'}
					
				]
			}
		},
		methods:{
			getNavArr(path) {
			/*
			 * arr: path以"/"分割的数组
			 * pathStr :相对title对应的路由跳转的path
			 */
				var arr = [];
				var pathStr = [];
				arr = path.split("/");
				for(var i=0; i<arr.length;i++) {
					for (var j = 0; j < this.mapArr.length; j++) {
						if (arr[i]==this.mapArr[j].path) {
							pathStr.push(arr[i]);
							this.navTitle.push({path:'/'+pathStr.join("/"),title:this.mapArr[j].title});
						}
					}
				}
			}
		},
		created() {
			//生成所有的映射相对path 的 title 显示在 breadNav 中
			if (this.route) {
				let mapArrItem = [];
				for (let i=0; i<this.route.length; i++) {
					let pathArr = this.route[i].path.split("/")
					let str = pathArr[pathArr.length-1];
				mapArrItem.push({ path:str,title:this.route[i].title })
					for (let j=0;j<this.route[i].items.length;j++) {
						let twoArr = this.route[i].items[j].path.split("/")
						let twoStr = twoArr[twoArr.length-1];
				mapArrItem.push({ path:twoStr,title:this.route[i].items[j].title })
					}
				}
				this.mapArr = this.mapArr1.concat(mapArrItem);
//				console.log(this.mapArr)
			} else{
				this.mapArr = this.mapArr1;
//				console.log(this.mapArr)
			}
			
			//使用该模块渲染时的钩子, 处理跳转过来的path
			this.getNavArr(this.$route.path);
			//使用路由钩子, 获取实时更新的path
			router.afterEach((to, from, next) => {
//	  			console.log(to.path)	;
	  			this.navTitle = [];
				this.getNavArr(to.path);
			});
			
		}
	}
</script>

<style scoped>
.tabbar{
	width: 1280px;
	margin: 20px auto;
	background-color: #f4f4f4;
	font-size: 14px;
	color: #666;
	padding: 20px 0;
}
.tabbar strong{
	padding: 20px 20px;
}
.tabbar span{
	padding: 20px 10px;
}
</style>