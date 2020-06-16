<template>
	<Basics class="drawer">
		<view class="main">
			<Basics class="title">
				<text>视图容器</text>
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
			}
		}
	}
</style>
