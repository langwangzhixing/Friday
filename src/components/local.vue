<template>
	<div>
		<div class="tlw-city">
			<!--分类导航-->
			<div class="tlw-classify-nav">
				<p>一级分类：</p>
				<a class="tlw-active" href="">全部</a>
				<a href="" v-for="item in service">{{item.title}}</a>
			</div>
			<!--全部的服务类型详情-->
			<div class="tlw-all">
				<ul>
					<router-link :to="{path:'/product',query:{title:item.title}}" v-for="(item,index) in service" tag='li' key='index'>
						<img :src='"../images/"+item.images+""' />
						<h2>{{item.title}}</h2>
						<div class="tlw-comment">
							<img src="../images/10.png" />
							<span>¥{{item.price}} / 人</span>
						</div>
						<p>{{item.from}}</p>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import server from '../data/server.json';
	export default {
		data(){
			return{
				service:server.kinds
			}
		}
	}
</script>

<style>
	/*分类导航*/
	.tlw-city {
		width: 1280px;
		margin: 0 auto;
	}
	
	.tlw-classify-nav {
		width: 100%;
		height: 58px;
		border-bottom: 1px solid #cccccc;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 15px;
	}
	
	.tlw-classify-nav a {
		color: black;
		margin: 0 8px;
		padding: 5px 8px;
	}
	
	.tlw-classify-nav .tlw-active,
	.tlw-classify-nav a:hover {
		background: #4b943d;
		color: white;
	}
	/*全部的服务类型详情*/
	
	.tlw-all ul {
		margin: 20px 0 0;
		overflow: hidden;
	}
	
	.tlw-all ul li {
		width: 301px;
		height: 413px;
		background: #f8f6f7;
		text-align: center;
		border: 1px solid #ececec;
		float: left;
		margin-right: 20px;
		margin-bottom: 20px;
	}
	.tlw-all ul li:nth-of-type(4n){
		margin-right: 0;
	}
	
	.tlw-all ul li:hover {
		border: 1px solid green;
	}
	
	.tlw-all ul li h2{
		font-size: 24px;
		margin: 10px 0;
	}
	
	.tlw-all img {
		width: 301px;
		height: 301px;
		margin-bottom: 5px;
	}
	
	.tlw-all .tlw-comment {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 5px 0;
	}
	
	.tlw-all .tlw-comment img {
		width: 100px;
		height: 20px;
		padding-right: 10px;
	}
	
	.tlw-all .tlw-comment span {
		font-size: 15px;
		color: red;
		line-height: 22px;
	}
</style>