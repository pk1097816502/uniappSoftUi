<template>
	<view class="Basics" :style="style">
		<slot></slot>
	</view>
</template>

<script>
	import {colorType} from "@/lib/regular.js";
	
	export default{
		props:{
			option:{
				type:Object,
				defalut:function(){
					return {};
				},
				value:function(){
					return {};
				}
			}
		},
		data(){
			return{
				shapeType:[
					"default",
					"press",
					"button",
					"disable"
				]
			}
		},
		computed:{
			style(){
				let tempStyle = {
					"background-color" : this.color,
					"width" : this.width+"rpx",
					"height" : this.height+"rpx",
					"border-radius" : this.radius+"rpx",
					"box-shadow" : this.boxShadow
				}
				console.log("输出样式",tempStyle);
				
				return tempStyle;
			},
			color(){
				if(this.option&&this.option.color){
					return this.option.color;
				}
				return "";
			},
			width(){
				if(this.option&&this.option.width){
					return this.option.width;
				}
				return "";
			},
			height(){
				if(this.option&&this.option.height){
					return this.option.height;
				}
				return "";
			},
			size(){
				return this.width<this.height?this.width:this.height || 40;
			},
			//圆角度数
			radius(){
				if(this.option&&this.option.radius){
					return this.option.radius;
				}
				return parseInt(this.size/6);
			},
			//阴影宽度
			distance(){
				if(this.option&&this.option.distance){
					return this.option.distance;
				}
				return parseInt(this.size/10);
			},
			//高光阴影倍数
			intensity(){
				if(this.option&&this.option.intensity){
					return this.option.intensity;
				}
				return 0.15;
			},
			//阴影模糊程度
			blur(){
				if(this.option&&this.option.blur){
					return this.option.blur;
				}
				return this.distance*2;
			},
			//控件状态
			shape(){
				if(this.option&&this.option.shape){
					for(let type of this.shapeType){
						if(this.option.shape==type){
							return this.option.shape;
						}
					}
				}
				return "plane";
			},
			boxShadow(){
				console.log("阴影颜色",this.shadowBoxShadow,this.highlightBoxShadow);
				
				let boxShadowLeftTopStr = `${this.distance}rpx ${this.distance}rpx ${this.blur}rpx ${this.shadowBoxShadow}`;
				let boxShadowRightBottomStr = `-${this.distance}rpx -${this.distance}rpx ${this.blur}rpx ${this.highlightBoxShadow}`;
				
				if(this.shape=="disable"){
					
				}
				return `${boxShadowLeftTopStr},${boxShadowRightBottomStr}`;
			},
			//计算高光
			highlightBoxShadow(){
				let rgbNum = [];
				rgbNum.push(...this.rgbNumList);
				for(let i in rgbNum){
					rgbNum[i] = parseInt(255-(1-this.intensity)*(255-rgbNum[i]));
				}
				let rgbStr = `rgb(${rgbNum[0]},${rgbNum[1]},${rgbNum[2]})`;
				console.log("当前主题颜色值",this.color,rgbNum);
				return rgbStr;
			},
			shadowBoxShadow(){
				let rgbNum = [];
				rgbNum.push(...this.rgbNumList);
				for(let i in rgbNum){
					// console.log("计算高光",(1-this.intensity)*num);
					rgbNum[i] = parseInt((1-this.intensity)*rgbNum[i]);
				}
				let rgbStr = `rgb(${rgbNum[0]},${rgbNum[1]},${rgbNum[2]})`;
				console.log("当前主题颜色值",this.color,rgbNum);
				return rgbStr;
			},
			rgbNumList(){
				let cType = colorType(this.color);
				if(cType == "error"){
					return [255,255,255];
				}else{
					switch(cType){
						case "color":
							let tempColor = this.color.substr(1);
							console.log("提取出来的颜色值",tempColor);
							let tempRgbNumList = [0,0,0];
							let digit = 1;
							if(tempColor.length>3){
								digit = 2;
							}
							for(let i in tempRgbNumList){
								let tempNum = parseInt(tempColor.substr(i*digit,digit),16);
								if(digit == 1){
									tempNum = (tempNum+1)*16;
								}
								tempRgbNumList[i] = tempNum;
							}
							console.log("color提取出来的颜色",tempRgbNumList);
							return tempRgbNumList;
						break;
					}
				}
				return "";
			}
		},
		created() {
			// console.log("color颜色是否合格",colorRegular("#ffffff"));
			// console.log("rgb颜色是否合格",rgbRegular("rgb(255,255,255)"));
			// console.log("rgba颜色是否合格",rgbaRegular("rgba(0,0,0,0.5)"));
		},
		mounted() {
			// console.log("判断颜色类型",colorType("#ffffff"),this.style);
		}
	}
</script>

<style>
</style>
