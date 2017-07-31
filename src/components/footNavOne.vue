<template>
	<div>
		<bread-nav></bread-nav>
		<div class="fresh-lyc">
			<div class="fresh-all-lyc">
				<div class="fresh-top-lyc">
					<p>优先保障</p>
					<span>日期 : 2015年9月21日</span>
				</div>
				<div class="fresh-content-lyc">
					<p>
						我们的梦想是为全国14亿人民能享用到安全和高品质的新鲜食材.是美国,澳大利亚,新西兰,以色列和西班牙领事馆农业和商务部的指定食材合作推广伙伴,有美国Sunkist,新西兰Zespri,澳大利亚MFC,以色列Jaffa等合作品牌.每年从全球五大洲和二十多个国家进口和销售超过1000个集装柜的水果和食品.同时,还致力于发展国内高品质的食材,我们和全国各地优质农场建立直联合作,并为此开发了和建立了完善的水果身份认证和溯源系统,确保食材的信息透明和安全.
					</p>
					<p>
						管理团队平均年龄36岁,员工平均年龄26岁,公司 信奉平等公开民主的管理文化,每一个员工都有表达自己建议和主张的权利.加入我们一起开括全新的水果文化,创立健康的食材品牌,共同分享高速增长的鲜果食品市场,和公司共同成长为行业顶尖的人才.
					</p>
					<p></p>
					<p>
						我们的梦想是为全国14亿人民能享用到安全和高品质的新鲜食材.是美国,澳大利亚,新西兰,以色列和西班牙领事馆农业和商务部的指定食材合作推广伙伴,有美国Sunkist,新西兰Zespri,澳大利亚MFC,以色列Jaffa等合作品牌.每年从全球五大洲和二十多个国家进口和销售超过1000个集装柜的水果和食品.同时,还致力于发展国内高品质的食材,我们和全国各地优质农场建立直联合作,并为此开发了和建立了完善的水果身份认证和溯源系统,确保食材的信息透明和安全.
					</p>
					<p>
						管理团队平均年龄36岁,员工平均年龄26岁,公司 信奉平等公开民主的管理文化,每一个员工都有表达自己建议和主张的权利.加入我们一起开括全新的水果文化,创立健康的食材品牌,共同分享高速增长的鲜果食品市场,和公司共同成长为行业顶尖的人才.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import breadNav from './breadNav';
	export default{
		components:{breadNav}
	}
</script>

<style lang="less" scoped>
	.fresh-lyc {
		width: 1280px;
		height: 905px;
		border: 1px solid #e3e3e3;
		margin: 0 auto;
		margin-top: 19px;
		margin-bottom: 43px;
		.fresh-all-lyc {
			width: 1200px;
			margin: 0 auto;
			.fresh-top-lyc {
				border-bottom: 1px solid #e3e3e3;
				overflow: hidden;
				p {
					text-align: center;
					font-size: 24px;
					color: #619d57;
					padding-top: 60px;
					padding-bottom: 30px;
				}
				span {
					float: right;
					padding-bottom: 20px;
					font-size: 14px;
					color: #adadad;
				}
			}
			.fresh-content-lyc {
				font-size: 14px;
				color: #a3a3a3;
				p {
					margin-top: 32px;
					text-indent: 2em;
					letter-spacing: 1px;
					line-height: 32px;
				}
				p:nth-of-type(3) {
					width: 1200px;
					height: 251px;
					background-image: url(../img/fresh.png);
				}
			}
		}
	}
</style>