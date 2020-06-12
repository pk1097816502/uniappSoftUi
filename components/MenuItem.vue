<template>
	<navigator :url="url" class="menu-item flex">
		<view class="label flex1">
			<slot></slot>
		</view>
		<view class="sign">
			<text class="iconfont iconjiantou1"></text>
		</view>
	</navigator>
</template>

<script>
	export default {
		props:{
			url:{
				type:String,
				default:"",
				value:""
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.menu-item{
		padding: $uni-spacing-col-lg;
	}
</style>
