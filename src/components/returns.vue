<template>
	<div class="tlw-returns">
		<div class="tlw-return-box tlw-return-box1" @click="feedback()">
			<router-link to="/user/feedback" tag="p">反馈</router-link>
		</div>
		<div class="tlw-return-box tlw-return-box2" @click="ret()">
			<p>返回</p>
		</div>
	</div>

</template>

<script>
	export default{
		methods:{
			ret(){
				$('body,html').animate({scrollTop:0},500);
			}
		},
		created(){
			$(window).scroll(function(){
				var heg = $(document).scrollTop();
				if(heg>170){
					$(".tlw-returns").show();
				}else{
					$(".tlw-returns").hide();
				}
			})
		}
	}
</script>

<style lang="less" scoped>
.tlw-returns{
	position: fixed;
	right: 0;
	bottom: 0;
	display: none;
	.tlw-return-box {
		width: 40px;
		height: 40px;
		background: green;
		border-radius: 6px;
		color: white;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
	}
	.tlw-return-box2{
		margin-top: 5px;
	}
}
</style>