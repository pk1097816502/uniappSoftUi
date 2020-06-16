<template>
	<Basics class="drawer">
		<view class="main">
			<Basics :option="{shape:'button'}" class="title">
				<text class="label">视图容器</text>
				<text class="iconfont icon-icon-test"></text>
			</Basics>
		</view>
	</Basics>
</template>

<script>
	import Basics from "../Basics.vue";
	
	export default{
		components:{Basics}
	}
</script>

<style lang="scss" scoped>
	.drawer{
		.main{
			.title{
				padding: $uni-content-padding;
				display: flex;
				align-items: center;
				
				.label{
					flex: 1;
				}
			}
		}
	}
</style>
