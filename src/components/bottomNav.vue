<template>
	<div>
		<div class="foot-first-lyc">
			<ul class="foot-first-content-lyc">
				<router-link :to='item.path' tag='li' v-for="(item,index) in route" key='index'>
					<img :src='"../img/foot"+(index+1)+".png"'/>
					<span>{{item.title}}</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				route:[
					{path:'/footOne',title:'优鲜保证'},
					{path:'/footTwo',title:'全程监控'},
					{path:'/footThree',title:'礼拜五特惠'},
					{path:'/footFour',title:'基地直供'},
					{path:'/footFive',title:'准时送达'}
				]
			}
		}
	}
</script>

<style scoped>
.foot-first-lyc {
	height: 107px;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
}
.foot-first-content-lyc {
	width: 1280px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.foot-first-content-lyc li {
	width: 255px;
	line-height: 45px;
	text-align: center;
	border-right: 1px solid #ddd;
	margin-top: 25px;
}
.foot-first-content-lyc li img{
	vertical-align: top;
}
.foot-first-content-lyc li:last-child {
	border-right: none;
}
.foot-first-content-lyc li span {
	font-size: 24px;
	font-weight: bold;
	color: #000;
}
</style>