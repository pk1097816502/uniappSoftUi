<template>
	<view class="key-number-page">
		<input :value="value" disabled @click="showKeyNumber"/>
		<KeyNumber ref="keyNumber" v-model="value" @input="inputKeyNumber"></KeyNumber>
	</view>
</template>

<script>
	import KeyNumber from "@/components/KeyNumber.vue";
	
	export default{
		components:{KeyNumber},
		data(){
			return{
				value:""
			}
		},
		methods:{
			inputKeyNumber(input){
				console.log("输入的值",input);
			},
			showKeyNumber(){
				console.log("打开键盘");
				this.$refs.keyNumber.showKeyNumber();
			}
		}
	}
</script>

<style class="scss" scoped>
	.key-number-page{
		
	}
</style>
