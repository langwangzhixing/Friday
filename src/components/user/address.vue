<template>
	<div>
		<div class="tlw-person-box">
			<div class="tlw-addressManage">
				<div class="tlw-address-top">
					<h5>地址管理</h5>
					<router-link to='/user/addAddress' tag='button'>添加新地址</router-link>
				</div>
				<table>
						<tr>
							<th>收货人</th>
							<th>所在区域</th>
							<th>街道地址</th>
							<th>联系电话</th>
							<th>备注</th>
							<th>操作</th>
						</tr>
						<tr>
							<td>张强强</td>
							<td>北京 北京市 朝阳区</td>
							<td>朝阳奥运媒体村（北苑天畅园）C3-2506室</td>
							<td>18331205623</td>
							<td>家里的地址</td>
							<td><span>设为默认地址</span>|<em>修改</em>|<em>删除</em></td>
						</tr>
						<tr>
							<td>张强强</td>
							<td>北京 北京市 朝阳区</td>
							<td>朝阳奥运媒体村（北苑天畅园）C3-2506室</td>
							<td>18331205623</td>
							<td>家里的地址</td>
							<td><span>设为默认地址</span>|<em>修改</em>|<em>删除</em></td>
						</tr>
					</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>
<style lang="less" scoped>
	.tlw-person-box {
		.tlw-addressManage {
			width: 1083px;
			height: 616px;
			border: 1px solid #CCCCCC;
			margin-left: 25px;
			.tlw-address-top{
				height: 60px;
				border-bottom: 1px solid #cccccc;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 0 20px;
				h5 {
					font-size: 18px;
					color: #414141;
					font-weight: 200;
				}
				button {
					width: 90px;
					height: 30px;
					border: none;
					font-size: 14px;
					font-weight: 200;
					border-radius: 6px;
					color: white;
					background: #498e3d;
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
							background: #f2f2f2;
						}	
						td{
							font-size: 15px;
							color: #666666;
							span{
								color: #f18a11;
								margin-right: 5px;
								cursor: pointer;
							}
							em{
								color: #4b943d;
								/*background: pink;*/
								margin-left: 5px;
								margin-right: 5px;
								cursor: pointer;
							}
						}
					}
				}
		}
	}
</style>