<template>
	<view class="menu">
		<MenuItem v-for="(item,index) in menuList" :url="item.url">{{item.label}}</MenuItem>
	</view>
</template>

<script>
	import MenuItem from "@/components/MenuItem.vue";
	
	export default {
		components:{MenuItem},
		props:{
			menuList:{
				type:Array,
				default:[],
				value:[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.menu{
		
	}
</style>
