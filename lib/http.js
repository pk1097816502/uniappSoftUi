import config from "./config.js";
import store from "@/store/index.js";
import Mock from "mockjs";
import mockIndex from "@/mock/index.js";

let Loading = false;

export function api(object={}){
	if(mockInterception(object)){
		return;
	}
	let tempObject = {
		url:config.host,
		header:{},
		data:{
			sign:config.sign
		},
		method:"GET",
		timeout:10000,
		isLoading : true,
		success:(res)=>{
			console.log("http->>>>>>>>>success",res);
			if(res.statusCode == 200){
				if(object.success&&typeof object.success == "function"){
					object.success(res.data);
				}
			}
		},
		complete:(res)=>{
			console.log("http->>>>>>>>>complete",res);
			if(tempObject.isLoading){
				uni.hideLoading();
				Loading = false;
			}
			if(object.complete&&typeof object.complete == "function"){
				object.complete(res);
			}
		}
	};
	if(object.url&&typeof object.url == "string"){
		tempObject.url += object.url;
	}
	if(object.header){
		tempObject.header = object.header;
	}
	//请求固定携带optionId
	// if(store.state.userInfo.openid){
	// 	tempObject.data.openid = store.state.userInfo.openid;
	// }
	if(object.data){
		tempObject.data = Object.assign(object.data,tempObject.data);
	}
	if(object.timeout&&typeof object.timeout == "number"){
		tempObject.timeout = object.timeout;
	}
	if(object.fail&&typeof object.fail == "function"){
		tempObject.fail = object.fail;
	}
	if(object.complete&&typeof object.complete == "function"){
		tempObject.complete = object.complete;
	}
	if(object.isLoading == false){
		tempObject.isLoading = false;
	}
	if(!Loading&&tempObject.isLoading){
		uni.showLoading({
			mask:true,
			title:"加载中...",
			success() {
				Loading = true;
			}
		});
	}
	return uni.request(tempObject);
}

function mockInterception(object={}){
	console.log("开启拦截检查",object);
	console.log("mockjs",Mock);
	console.log("mockjs",Mock._mocked);
	let tempUrl = object.url?object.url:"";
	console.log("临时的url",tempUrl);
	if(tempUrl&&Mock._mocked[tempUrl]){
		console.log("拦截成功",);
		if(object.success&&typeof object.success == "function"){
			console.log("存在请求结果");
			let template;
			if(Mock._mocked[tempUrl].template&&typeof Mock._mocked[tempUrl].template == "function"){
				template = Mock._mocked[tempUrl].template();
			}
			console.log("返回的参数",template);
			object.success(template);
		}
		return true;
	}
	return false
}