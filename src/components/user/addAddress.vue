<template>
	<div class="tlw-person-box1">
		<div class="tlw-add-newAddress1">
			<h5>添加新地址</h5>
			<div class="tlw-address-message">
				<div class="tlw-new-address">
					<div class="tlw-consignee-name">
						<em>*</em>
						<span>收货人姓名：</span>
						<input type="text" placeholder="收货人姓名" />
					</div>
					<div class="tlw-consignee-area">
						<em>*</em>
						<span>所在地区：</span>
						<select id="s_province" name="s_province"></select>
						<select id="s_city" name="s_city"></select>
						<select id="s_county" name="s_county"></select>
					</div>
					<div class="tlw-detailed-address">
						<em>*</em>
						<span>详细地址：</span>
						<input type="text" placeholder="用于接受货物的详细地址" />
					</div>
					<div class="tlw-phone-number">
						<em>*</em>
						<span>联系电话：</span>
						<input type="text" placeholder="推荐使用手机号码" />
						<strong>或固定电话：</strong>
						<input type="text" placeholder="电话号码" />
					</div>
					<div class="tlw-usual-address">
						<input type="checkbox" />
						<strong>设为常用地址</strong>
					</div>
					<button @click="save()">保存</button>
					<div class="tlw-alert">
						<span class="tlw-compellation">姓名不能为空</span>
						<span class="tlw-affiliatingArea">所属地区不能为空</span>
						<span class="tlw-detailedAddress">请输入详细地址</span>
						<span class="tlw-contactWay">联系方式不能为空</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			save() {
				$(".tlw-compellation").removeClass("fadeOut");
				$(".tlw-affiliatingArea").removeClass("fadeOut");
				$(".tlw-detailedAddress").removeClass("fadeOut");
				$(".tlw-contactWay").removeClass("fadeOut");
				if(!$(".tlw-consignee-name input").val()) {
					
					$(".tlw-compellation").addClass("animated fadeIn")
					setTimeout(function() {
						$(".tlw-compellation").removeClass("fadeIn").addClass("fadeOut");
					}, 1000)
				} else if(!$(".tlw-detailed-address input").val()) {
					
					$(".tlw-detailedAddress").addClass("animated fadeIn")
					setTimeout(function() {
						$(".tlw-detailedAddress").removeClass("fadeIn").addClass("fadeOut");
					}, 1000)
				}else{
					if(!$(".tlw-phone-number input").val()){
						$(".tlw-contactWay").addClass("animated fadeIn")
						setTimeout(function() {
							$(".tlw-contactWay").removeClass("fadeIn").addClass("fadeOut");
						}, 1000)
					}
				}
			}
		},
		mounted(){
			_init_area();
		}
	}
</script>
<style lang="less" scoped>
	.tlw-person-box1 {
		.tlw-add-newAddress1 {
			width: 1083px;
			height: 618px;
			border: 1px solid #CCCCCC;
			margin-left: 25px;
			position: relative;
			h5 {
				font-size: 18px;
				font-weight: 500;
				color: #414141;
				line-height: 60px;
				border-bottom: 1px solid #CCCCCC;
				padding-left: 20px;
			}
			.tlw-address-message {
				padding: 40px 30px;
				em {
					color: #F08200;
				}
				span {
					font-size: 18px;
				}
				input {
					width: 170px;
					height: 32px;
					border: 1px solid #ccc;
					font-size: 14px;
					text-indent: 10px;
				}
				.tlw-consignee-area {
					margin: 30px 18px;
					select {
						width: 138px;
						height: 30px;
						margin-right: 20px;
						font-size: 16px;
					}
				}
				.tlw-detailed-address {
					margin-left: 18px;
				}
				.tlw-phone-number {
					margin: 30px 0 20px 18px;
					strong {
						font-size: 14px;
					}
				}
				.tlw-usual-address {
					display: flex;
					align-items: center;
					height: 18px;
					margin-left: 120px;
					strong {
						margin-left: -150px;
					}
				}
				button {
					width: 150px;
					height: 40px;
					font-size: 18px;
					color: #fff;
					background: #F08200;
					border: none;
					border-radius: 6px;
					margin: 40px 120px;
				}
				.tlw-alert {
					span {
						display: inline-block;
						border: 1px solid #ccc;
						padding: 20px 30px;
						color: white;
						font-size: 14px;
						background: rgba(0, 0, 0, 0.5);
						position: absolute;
						bottom: 330px;
						left: 450px;
						opacity: 0;
					}
				}
			}
		}
	}
</style>