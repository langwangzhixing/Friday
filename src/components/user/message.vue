<template>
	<div class="message-lyc">
		<div class="message-top-lyc">
			<span>我的消息</span>
		</div>
		<div class="message-middle-lyc">
			<table>
				<tr>
					<th>标题</th>
					<th>发送时间</th>
					<th>状态</th>
					<th>操作</th>
				</tr>
				<tr>
					<td>您的货物已发货您的货物已发货您的货物已发货</td>
					<td>2015年9月23日 15:25:07</td>
					<td>未查看</td>
					<td><span>查看</span> | <span>删除</span></td>
				</tr>
				<tr>
					<td>您的货物已发货您的货物已发货您的货物已发货</td>
					<td>2015年9月23日 15:25:07</td>
					<td>未查看</td>
					<td><span>查看</span> | <span>删除</span></td>
				</tr>
				<tr>
					<td>您的货物已发货您的货物已发货您的货物已发货</td>
					<td>2015年9月23日 15:25:07</td>
					<td>未查看</td>
					<td><span>查看</span> | <span>删除</span></td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	.message-lyc {
		width: 1083px;
		height: 618px;
		border: 1px solid #e7e7e7;
		margin-left: 25px;
		margin-bottom: 48px;
		.message-top-lyc {
			border-bottom:1px solid #e7e7e7; 
			span {
				display: inline-block;
				padding: 20px 21px;
			}
		}
		.message-middle-lyc {
			table {
				width: 1044px;
				margin: 0 auto;
				margin-top: 22px;
				tr {
					border:1px solid #e7e7e7;
					height: 48px;
					th {
						background: #f2f2f2;
						height: 48px;
						line-height: 48px;
						font-size: 16px;
					}
					th:nth-of-type(1) {
						width: 500px;
					}
					th:nth-of-type(2) {
						width: 200px;
					}
					th:nth-of-type(3) {
						width: 100px;
					}
					th:nth-of-type(3) {
						width: 200px;
					}
					td {
						text-align: center;
						line-height: 48px;
						font-size: 14px;
						color: #666666;
						span {
							color: #63a257;
					    }
				    }
				}
			}
		}
	}
</style>