import Vue from 'vue';
import Router from 'vue-router';

import index from 'components/index';
import login from 'components/login';
import home from 'components/home';
import local from 'components/local';
import friday from 'components/friday';
import integral from 'components/integral';
import footNavOne from 'components/footNavOne';
import footNavTwo from 'components/footNavTwo';
import footNavThree from 'components/footNavThree';
import footNavFour from 'components/footNavFour';
import footNavFive from 'components/footNavFive';
import goodsDetail from 'components/goodsDetail';
import product from 'components/productDetails';
import nofind from 'components/nofind';

import allGoods from 'components/allGoods';
import moreGoods from 'components/moreGoods';
//个人中心
import user from 'components/user/user';
import myAccount from 'components/user/myAccount';
import myOrder from 'components/user/myOrder';
import myIntegral from 'components/user/myIntegral';
import orderScore from 'components/user/orderScore';
import myWallet from 'components/user/myWallet';
import refillCar from 'components/user/refillCar';
import personalData from 'components/user/personalData';
import address from 'components/user/address';
import myFavorite from 'components/user/myFavorite';
import recently from 'components/user/recently';
import passwords from 'components/user/passwords';
import message from 'components/user/message';
import feedback from 'components/user/feedback';
import addAddress from 'components/user/addAddress';

//购物车
import shoppCar from 'components/shoppCar/shoppCar';

import typeRoute from '../data/typeRoute.json';

var childRoute = [];
for (var i = 0; i < typeRoute.route.length; i++) {
	childRoute.push({path:typeRoute.route[i].path, component:moreGoods});
	for (var j = 0; j<typeRoute.route[i].items.length; j++) {
		childRoute.push({path:typeRoute.route[i].items[j].path, component:moreGoods});
	}
}



Vue.use(Router)

const router = new Router({
	mode:'history',
	routes: [
		{path: '/',redirect: '/login'},
		{path: '/login',component: login},
		{path: '/nofind',component: nofind},
		
		{
			path: '/index',component: index,
			children:[
				{path: '/home',component: home},
				{
					path: '/home/all',component: allGoods,
					children:childRoute
				},
				{path:'/detail', component: goodsDetail},
				{path: '/local',component: local},
				{path: '/friday',component: friday},
				{path: '/integral',component: integral},
				{path: '/product',component: product},
				{
					path: '/user',component: user,
					children:[
						//交易管理
						{path: '/user/index',component:myAccount},
						{path: '/user/myOrder',component:myOrder},
						{path: '/user/myIntegral',component:myIntegral},
						{path: '/user/orderScore',component:orderScore},
						{path: '/user/myWallet',component:myWallet},
						{path: '/user/refillCar',component:refillCar},
						//会员资料
						{path: '/user/personalData',component:personalData},
						{path: '/user/address',component:address},
						{path: '/user/myFavorite',component:myFavorite},
						{path: '/user/recently',component:recently},
						{path: '/user/passwords',component:passwords},
						//站内信
						{path: '/user/message',component:message},
						{path: '/user/feedback',component:feedback},
						{path: '/user/addAddress',component:addAddress}
					]
				},
				//购物车
				{path: '/shoppCar',component: shoppCar},
				
				{path: '/footOne',component: footNavOne},
				{path: '/footTwo',component: footNavTwo},
				{path: '/footThree',component: footNavThree},
				{path: '/footFour',component: footNavFour},
				{path: '/footFive',component: footNavFive},
			]
		},    
	]
});




export default router;
