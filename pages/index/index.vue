<template>
	<view class="content":style="{'background-color':color}">
		<Menu :menuList="menuList"></Menu>
		<drawer></drawer>
	</view>
</template>

<script>
	import Menu from "@/components/Menu.vue";
	import drawer from "@/components/Soft-UI/view/drawer.vue";
	
	export default {
		components:{Menu,drawer},
		data() {
			return {
				menuList:[
					{
						label:"数字键盘",
						url:"/pages/components/keyNumber"
					}
				],
				color:"#ffffff"
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content{
		display: flex;
		flex-direction: column;
		
		.basics{
			margin: 50rpx;
		}
	}
</style>
