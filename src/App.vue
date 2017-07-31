<template>
	<div id="app">
		<top-nav :message="strings"></top-nav>
		<heads></heads>
		<keep-alive>
			<router-view @logins="shows" @register="regs"></router-view>
		</keep-alive>
		<bottom-nav></bottom-nav>
		<returns></returns>
		<foot></foot>
	</div>
</template>

<script>
	import topNav from 'components/topNav';
	import heads from 'components/header';
	import bottomNav from 'components/bottomNav';
	import foot from 'components/footer';
	import returns from 'components/returns';
	import router from './router';

	export default {
		data() {
			return {
				strings: {
					log: {
						title: "登录"
					},
					reg: "注册"
				}
			}
		},
		components: {
			topNav,
			heads,
			bottomNav,
			foot,
			returns
		},
		methods: {
			shows: function(data) {
				this.strings.log = eval('(' + data + ')');
			},
			regs: function(data) {
				this.strings.reg = data;
			},
			getCookie(name) {
				var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
				return v ? v[2] : null;
			}
		},
		mounted() {
			var phone = this.getCookie('fridayUser');
			if(phone) {
				this.strings = {
					log: {
						title: "你好,",
						phone: phone
					},
					reg: "退出"
				}
				this.$http.get('/api/user/shopCarCount',{params:{phone:phone}})	.then((res) => {
					var num = res.bodyText;
					$('#shopCarCount').text(num)
				});
			} else {
				this.strings = {
					log: {
						title: "登录"
					},
					reg: "注册"
				}
			}
		}
	}
</script>

<style scoped> 
</style>
<style scoped>

</style>
