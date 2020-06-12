<template>
	<view class="content">
		<Menu :menuList="menuList"></Menu>
	</view>
</template>

<script>
	import Menu from "@/components/Menu.vue";
	
	export default {
		components:{Menu},
		data() {
			return {
				menuList:[
					{
						label:"数字键盘",
						url:"/pages/components/keyNumber"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lnag="scss" scoped>
	
</style>
