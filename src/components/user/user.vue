<template>
	<div class="tlw-center-conts">
		<div class="tlw-person-center">
			<h2>个人中心</h2>
			<dl v-for="item in cont">
				<dt>{{item.dt}}<span>></span></dt>
				<router-link :to='abc.path' tag='dd' v-for="(abc,index) in item.dd" key='index'>{{abc.title}}</router-link>
			</dl>
		</div>
		<router-view class='zh-box'></router-view>
	</div>
</template>

<script>
	import userRoute from '../../data/userRoute.json';
	
	export default {
		data() {
			return {
				cont: userRoute.userCenter
			}
		}
	}
</script>
<style scoped>
	.tlw-center-conts {
		width: 1280px;
		/*background: pink;*/
		margin: 20px auto;
		overflow: hidden;
	}
	
	.tlw-person-center {
		width: 170px;
		border: 1px solid #cccccc;
		padding-left: 20px;
		color: #666666;
		float: left;
		box-sizing: border-box;
	}
	.zh-box{
		float: left;
	}
	.tlw-person-center h2 {
		font-size: 24px;
		font-weight: 600;
		border-bottom: 1px solid #cccccc;
		line-height: 56px;
	}
	
	.tlw-person-center dl {
		margin: 10px 0;
	}
	
	.tlw-person-center dl dt {
		font-size: 19px;
		font-weight: 600;
	}
	
	.tlw-person-center dl dt span {
		margin-left: 50px;
	}
	
	.tlw-person-center dl dd {
		font-size: 14px;
		margin: 20px 0;
		cursor: pointer;
	}
	
	.tlw-person-center dl dd:hover {
		color: #6ba361;
		text-decoration: underline;
	}
</style>