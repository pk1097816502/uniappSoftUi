<template>
	<view v-if="isShowData" class="key-number" @click="hideKeyNumber">
		<view class="key-number-box">
			<view class="key-number-value">
				<text>{{valueData}}</text>
				<button @click="hideKeyNumber">完成</button>
			</view>
			<view class="key-number-list" @click.stop>
				<view class="key-item" @click="clickKey('1')">1</view>
				<view class="key-item" @click="clickKey('2')">2</view>
				<view class="key-item" @click="clickKey('3')">3</view>
				<view class="key-item" @click="clickKey('4')">4</view>
				<view class="key-item" @click="clickKey('5')">5</view>
				<view class="key-item" @click="clickKey('6')">6</view>
				<view class="key-item" @click="clickKey('7')">7</view>
				<view class="key-item" @click="clickKey('8')">8</view>
				<view class="key-item" @click="clickKey('9')">9</view>
				<view class="key-item" @click="clickKey('-')">-</view>
				<view class="key-item" @click="clickKey('0')">0</view>
				<view class="key-item" @click="clickKey('delete')">删除</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			value:"",
			isShow:{
				type:Boolean,
				default:false,
				value:false
			}
		},
		data() {
			return {
				isShowData:this.isShow,
				valueData:this.value
			};
		},
		watch:{
			value:{
				handler:function (val,oldVal){
					this.valueData = val;
				}
			}
		},
		methods:{
			clickKey(key){
				// console.log("输入的字符",key,this.value);
				if(key=="delete"){
					if(this.valueData.length>0){
						this.valueData = this.valueData.substr(0,this.valueData.length-1)
						this.$emit("input",this.valueData);
					}
				}else{
					this.valueData+=key;
					this.$emit("input",this.valueData);
				}
			},
			showKeyNumber(){
				this.isShowData = true;
			},
			hideKeyNumber(){
				this.isShowData = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.key-number{
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0,0,0,0.5);
		
		.key-number-box{
			position: fixed;
			bottom: 0;
			width: 100%;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			
			.key-number-value{
				background-color: #f8f8f8;
				font-size: 30rpx;
				padding: 20rpx;
				box-sizing: border-box;
				width: 100%;
				min-height: 80rpx;
				display: flex;
				
				text{
					flex: 1;
				}
				
				button{
					height: 100%;
					padding: 0;
					margin: 0;
					line-height: 0;
					font-size: 30rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100rpx;
					border-radius: 0;
					background-color: #007AFF;
					color: #FFFFFF;
					
					&::after{
						display: none;
					}
				}
			}
			
			.key-number-list{
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				background-color: #c0c0c0;
				
				.key-item{
					width: 240rpx;
					height: 100rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 15rpx;
					background-color: #FFFFFF;
					
					&:active{
						background-color: #dddddd;
					}
				}
			}
		}
	}
</style>
