<template>
	<div class="zh-nav">
		<div class="zh-kinds" @mouseenter="bol=!bol" @mouseleave="bol=!bol">
			<span>全部分类</span>
			<div class="zh-menu" v-show="bol">
				<ul>
					<li v-for="(item,index) in kinds" @mouseenter="show(index)">
						{{item.kind}}
						<div class="zh-items">
							<p v-for="val in itemArr">{{val}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	    <ul class="zh-list">
	      <router-link :to="item.path" tag='li' v-for="(item,index) in route" key='index'><span>{{item.title}}</span></router-link>
		  </ul>
	  </div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			bol:false,
			itemArr:[],
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
			route:[
				{path:'/home',title:'首页'},
				{path:'/local',title:'同城'},
				{path:'/friday',title:'礼拜五'},
				{path:'/integral',title:'积分商城'}
			]
		}
	},
	methods: {
		show(index) {
			this.itemArr = this.kinds[index].items;
		},
		showMenu() {
			this.bol = true;
		}
	}
	
}
</script>

<style scoped>
.zh-nav{
	height: 50px;
	width: 1280px;
	font-size: 18px;
	margin: 0 auto;
	border-bottom: 1px solid #ccc;
}
.zh-kinds{
	width: 170px;
	text-align: center;
}
.zh-list li{
	float: left;
	line-height: 50px;
}
.router-link-active, .zh-list li:hover{
	background-color: #F08200;
	color: #fff;
}
.zh-list li:hover span{
	border: none;
}
.zh-list li span{
	border-left: 1px solid #E8E8E8;
	padding: 0 70px;
	text-align: center;
}
.zh-kinds,.zh-list{
	float: left;
}
.zh-kinds{
	position: relative;
	line-height: 50px;
	padding-left: 10px;
}
.zh-kinds span:after{
	content: "";
	display: inline-block;
	width: 10px;
	height: 10px;
	margin-left: 18px;
	border-left: 1.5px solid #333;
	border-bottom: 1.5px solid #333;
	transform: rotate(-45deg);
	vertical-align: top;
	margin-top: 15px;
}
.zh-menu{
	position: absolute;
	left: 0;
	top: 51px;
	width: 770px;
	background: #f4f9ec;
	z-index: 100;
}
.zh-menu ul{
	width: 180px;
	padding-bottom: 50px;
	border-right: 2px solid #efeeec;
	background-color: #fff;
}
.zh-menu ul li{
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 16px;
	border-bottom: 2px solid #efeeec;
}
.zh-menu ul li:hover,.zh-items:hover{
	background-color: #f4f9ec;
}
.zh-items{
	position: absolute;
	left: 182px;
	top: 0;
	width: 488px;
	background-color: #fff;
	padding: 15px 50px;
}
.zh-items p{
	text-align: left;
	line-height: 30px;
	font-size: 18px;
	color: #4b943d;
}


</style>
