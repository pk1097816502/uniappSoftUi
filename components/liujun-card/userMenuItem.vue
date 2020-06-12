<template>
	<button v-if="type=='button'" class="user-menu-item" v-on="$listeners" v-bind="$attrs">
		<view class="icon">
			<slot name="icon"></slot>
		</view>
		<view class="label">
			<slot></slot>
		</view>
		<view class="button">
			<text class="iconfont icon-qmx-jiantou1"></text>
		</view>
	</button>
	<navigator v-else-if="type=='navigator'" class="user-menu-item" v-on="$listeners" v-bind="$attrs">
		<view class="icon">
			<slot name="icon"></slot>
		</view>
		<view class="label">
			<slot></slot>
		</view>
		<view class="button">
			<text class="iconfont icon-qmx-jiantou1"></text>
		</view>
	</navigator>
</template>

<script>
	export default{
		props:{
			type:{
				type:String,
				default:"navigator",
				value:"navigator"
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-menu-item{
		display: flex;
		align-items: center;
		border-radius: initial;
		background-color: initial;
		text-align: initial;
		
		&::after,&::before{
			display: none;
		}
		
		.icon{
			width: fit-content;
			height: fit-content;
		}
		.label{
			flex: 1;
			margin-left: 18rpx;
		}
		.button{
			.iconfont{
				font-size: 32rpx;
			}
		}
	}
</style>
