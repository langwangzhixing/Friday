// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import $ from 'jquery';

require("static/css/swiper.min.css");
require("static/font/iconfont.css");
require("static/css/reset.css");
require("static/js/swiper.jquery.min.js");
require("static/js/swiper.min.js");

Vue.use(VueResource)
Vue.config.productionTip = false

//console.log(Boolean($('#zh-phone').text()))

new Vue({
  el: '#app',
	router,
  template: '<App/>',
  components: { App }
})
