<template>
	<div class="tlw-person-box">
		<div class="tlw-person-integral">
			<h5>我的积分</h5>
			<div class="tlw-myIntegration">
				<p>当前积分：<em>240分</em></p>
				<table>
					<tr>
						<th>积分日期</th>
						<th>变动</th>
						<th>来源</th>
					</tr>
					<tr>
						<td>2015-04-15 16:20:35</td>
						<td>+100</td>
						<td>消费赠送</td>
					</tr>
				</table>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default {

	}
</script>
<style lang="less" scoped>
	.tlw-person-box {
		.tlw-person-integral{
			width: 1083px;
			height: 618px;
			border: 1px solid #CCCCCC;
			margin-left: 25px;
			position:relative;
			h5{
				font-size: 18px;
				font-weight: 500;
				color: #414141;
				line-height: 60px;
				border-bottom:1px solid #CCCCCC ;
				padding-left: 20px;
			}
			.tlw-myIntegration{
				padding: 20px 20px;
				p{
					font-size: 17px;
					font-weight: 600;
					em{
						font-size: 20px;
						font-weight: 200;
						color: #f08200;
					}
				}
				table{
					width: 100%;
					border: 1px solid #cccccc;
					border-bottom: none;
					text-align: center;
					margin-top: 20px;
					tr{
						height: 50px;
						line-height: 50px;
						border-bottom: 1px solid #cccccc;
						th{
							font-size: 17px;
							font-weight: 200;
							background: #f2f2f2;
						}	
						td{
							color: #666666;
						}
					}
					
					
				}
			}
		}
	}
</style>