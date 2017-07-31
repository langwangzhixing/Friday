<template>
	<div class="tlw-person-box">
		<div class="tlw-personalData">
			<h5>个人资料</h5>
			<div class="tlw-personalData-cont">
				<div class="tlw-myHeadPortrait">
					<p>当前头像：</p>
					<img :src="'../../../static/upload/'+headImg" />
					<input type="file" @change="onFileChange" multiple/>
					<router-link to='/user/personalData' tag='em'>修改</router-link>
				</div>
				<div class="tlw-myNickname">
					<p>昵称：</p>
					<input type="text" v-model="nickname"/>
				</div>
				<div class="tlw-myGender">
					<p>性别：</p>
					<input id="boy" type="radio" name="person" :checked="Flag" @click="Flag=!Flag"/>
					<label for="boy">男</label>
					<input id="girl" type="radio" name="person" value="女" :checked="!Flag" @click="Flag=!Flag"/>
					<label for="girl">女</label>
				</div>
				<div class="tlw-myBirthday">
					<p>生日：</p>
					<select id="year" v-model="year"></select><span>年</span>
					<select id="month" v-model="month"></select><span>月</span>
					<select id="day" v-model="day"></select><span>日</span>
				</div>
				<div class="tlw-myPhoneNum">
					<p>手机：</p>
					<input type="text" v-model="newPhone"/>
					<span>更换手机</span>
				</div>
				<button @click="submit()">确认提交</button>
			</div>
		</div>
	</div>
</template>

<script>
	import router from '../../router';
	export default {
		data(){
			return{
				headImg:'default.png',
				formData:{},
				nickname:'',
				year:1949,
				month:1,
				day:1,
				newPhone:"",
				Flag:true,
			}
		},
		methods:{
			onFileChange(ev){
				var phone = this.getCookie('fridayUser');
				var strChangeArr = ev.target.value.split('.'); 
				var format = strChangeArr[strChangeArr.length-1].trim();
				if (format == "jpg" || format == "png" || format == "jpeg") {
					this.formData = new FormData(); 
					this.formData.append('file', ev.target.files[0]);
					this.formData.append('phone',phone);
					this.$http.post('/api/user/file',this.formData).then(res => {
						this.headImg = res.bodyText;
//						console.log(this.headImg)
					});
				}else{
					alert("请上传图片")
				}
			},
			getCookie(name) {
			    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
			    return v ? v[2] : null;
			},
			submit(){
				var phone = this.getCookie('fridayUser');
				if (phone) {
					if (this.Flag) var sex = '男';
					else sex = '女';
					if (this.formData.append) {
						this.formData.append('phone',phone);
						this.formData.append('nickname',this.nickname);
						this.formData.append('sex',sex);
						this.formData.append('year',this.year);
						this.formData.append('month',this.month);
						this.formData.append('day',this.day);
						this.formData.append('newPhone',this.newPhone);
					
						this.$http.post('/api/user/file',this.formData).then(res => {
							this.headImg = res.bodyText;
							alert("资料修改成功!")
						});
					}
				}
			},
			creatYear() {
				var year = "";
				for(var i = 1949; i < 2018; i++) {
					year += "<option>" + i + "</option>"
				}
				$("#year").html(year);
			},
			creatMonth() {
				var month = "";
				for(var j = 1; j < 13; j++) {
					month += "<option>" + j + "</option>"
				}
				$("#month").html(month);
			},
			creatDay() {
				var day = "";
				for(var m = 1; m < 32; m++) {
					day += "<option>" + m + "</option>"
				}
				$("#day").html(day);
			},
			getdata(){
				var phone = this.getCookie('fridayUser');
				if (phone) {
					this.$http.get('/api/user/personMsg',{params:{phone:phone}}).then(res => {
						this.headImg = res.bodyText;
//						console.log(this.headImg)
					});
				}
			}
		},
		created(){
			this.getdata()
		},
		mounted() {
			this.creatYear()
			this.creatMonth()
			this.creatDay()
		}
	}
</script>
<style lang="less" scoped>
	.tlw-person-box {
		.tlw-personalData {
			width: 1083px;
			height: 616px;
			border: 1px solid #CCCCCC;
			margin-left: 25px;
			h5 {
				height: 60px;
				font-size: 18px;
				line-height: 60px;
				color: #414141;
				border-bottom: 1px solid #cccccc;
				padding-left: 20px;
			}
			.tlw-personalData-cont {
				font-size: 18px;
				font-weight: 200;
				.tlw-myHeadPortrait {
					/*height: 80px;*/
					/*line-height: 80px;*/
					padding: 40px 0 0 40px;
					/*background:pink;*/
					display: flex;
					flex-direction: row;
					align-items: center;
					position:relative;
					img {
						width: 70px;
						height: 70px;
						border: 3px solid #ffe313;
						border-radius: 50%;
					}
					p:nth-of-type(2) {
						font-size: 16px;
						color: #93bf8b;
						margin-left: 20px;
						cursor: pointer;
					}
					input{
						width: 60px;
						opacity: 0;
					}
					em{
						font-size: 16px;
						color: darkseagreen;
						position: absolute;
						left: 220px;
						z-index: -10;
					}
				}
				.tlw-myNickname {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-left: 75px;
					/*background: yellow;*/
					padding: 10px 0 20px 75px;
					input {
						width: 170px;
						height: 35px;
						font-size: 18px;
						font-weight: 200;
						text-indent: 10px;
						color: #666666;
						border: 1px solid #cccccc;
						background: #f4f4f4;
					}
				}
				.tlw-myGender {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-left: 75px;
					/*background: yellowgreen;*/
					padding-left: 75px;
					input {
						margin-right: 10px;
					}
					label {
						margin-right: 30px;
					}
				}
				.tlw-myBirthday {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-left: 75px;
					/*background: pink;*/
					padding: 20px 0 20px 75px;
					select {
						display: block;
						width: 108px;
						height: 34px;
						font-size: 18px;
						font-weight: 200;
						border: 1px solid #cccccc;
						margin-right: 10px;
					}
					span {
						margin-right: 25px;
					}
				}
				.tlw-myPhoneNum{
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-left: 75px;
					/*background: pink;*/
					padding:0 0 20px 75px;
					input{
						width: 170px;
						height: 35px;
						font-size: 18px;
						font-weight: 200;
						text-indent: 10px;
						color: #666666;
						border: 1px solid #cccccc;
						background: #f4f4f4;
					}
					span{
						font-size: 16px;
						color: #93bf8b;
						margin-left: 20px;
						cursor: pointer;
					}
				}
				button{
					width: 150px;
					height: 50px;
					font-size: 20px;
					color: white;
					font-weight: 100;
					background: #f08200;
					border: none;
					border-radius: 6px;
					margin: 20px 0 0 130px;
					cursor: pointer;
				}
			}
		}
	}
</style>