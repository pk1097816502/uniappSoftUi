<template>
	<view class="content":style="{'background-color':color}">
		<Menu :menuList="menuList"></Menu>
		<Basics :option="{color:color,width:'300',height:'300'}" class="basics"></Basics>
	</view>
</template>

<script>
	import Menu from "@/components/Menu.vue";
	import Basics from "@/components/Soft-UI/Basics.vue";
	
	export default {
		components:{Menu,Basics},
		data() {
			return {
				menuList:[
					{
						label:"数字键盘",
						url:"/pages/components/keyNumber"
					}
				],
				color:"#111"
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
