<template>
	<view class="user-info">
		<view class="back">
			
		</view>
		<view class="info">
			<view class="top">
				<view class="head-img">
					<image src="/static/image/index/tx.png"></image>
				</view>
				<view class="content">
					<view class="name">
						<text>{{userInfo.username}}</text>
					</view>
					<view class="phone">
						<text>{{userInfo.mobile}}</text>
					</view>
					<view class="address">
						<text>{{userInfo.zone_name}}</text>
					</view>
				</view>
				<view class="label">
					<view class="icon">
						<image></image>
					</view>
					<view class="text">
						<text>警务助理</text>
					</view>
				</view>
			</view>
			<view class="bottom">
				<view class="icon">
					<text class="iconfont icon-qmx-tips"></text>
				</view>
				<view class="news">
					<view class="text">
						<template v-if="msgCount>0">
							<text>您有{{msgCount}}条未读消息</text>
							<text class="tips"></text>
						</template>
						<template v-else>
							<text>无消息</text>
						</template>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			msgCount:{
				type:Number,
				default:0,
				value:0
			}
		},
		data(){
			return{
				userInfo:uni.getStorageSync("userInfo")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-info{
		width: 100%;
		height: 100%;
		position: relative;
		
		>view{
			width: 100%;
			height: 100%;
			border-radius: 15rpx;
		}
		
		.back{
			position: absolute;
			top: 0;
			left: 0;
			background-color: #228EFF;
			z-index: 1;
		}
		.info{
			display: flex;
			flex-direction: column;
			overflow: hidden;
			position: relative;
			z-index: 2;
			
			.top{
				flex: 1;
				display: flex;
				padding-top: 30rpx;
				
				.head-img{
					margin-left: 36rpx;
					margin-right: 26rpx;
					width: 140rpx;
					height: 140rpx;
					box-sizing: border-box;
					background-color: #6DA7FE;
					border-radius: 70rpx;
					padding: 5rpx;
					
					image{
						width: 100%;
						height: 100%;
						border-radius: 50%;
						background-color: #28BD52;
					}
				}
				.content{
					display: flex;
					flex-direction: column;
					flex: 1;
					margin-right: 60rpx;
					color: #FFFFFF;
					
					.name{
						font-size: 34rpx;
						margin-top: 13rpx;
						font-weight: bold;
					}
					.phone,.address{
						font-size: 24rpx;
						margin-top: 10rpx;
						font-weight: 500;
					}
				}
				.label{
					position: absolute;
					right: 0;
					top: 50rpx;
					display: flex;
					width: 175rpx;
					height: 60rpx;
					color: #511F00;
					font-size: 24rpx;
					background-color: #FED87C;
					border-radius: 30rpx 0 0 30rpx;
					align-items: center;
					
					.icon{
						width: 46rpx;
						height: 46rpx;
						margin-left: 14rpx;
						
						image{
							width: 100%;
							height: 100%;
							border-radius: 50%;
							background-color: #511F00;
						}
					}
					.text{
						flex: 1;
						display: flex;
						justify-content: center;
					}
				}
			}
			.bottom{
				background-color:rgba(30,125,237,0.45);
				height: 75rpx;
				display: flex;
				align-items: center;
				font-size: 22rpx;
				color: #FFFFFF;
				
				.icon{
					width: fit-content;
					margin-left: 37rpx;
					display: flex;
					align-items: center;
					
					.iconfont{
						font-size: 25rpx;
					}
				}
				.news{
					flex: 1;
					display: flex;
					padding-right: 30rpx;
					.text{
						margin-left: 14rpx;
						display: flex;
						
						.tips{
							margin-left: 7rpx;
							flex: initial;
							width: 14rpx;
							height: 14rpx;
							background-color: red;
							display: block;
							border-radius: 7rpx;
							margin-top: -7rpx;
						}
					}
				}
			}
		}
	}
</style>
