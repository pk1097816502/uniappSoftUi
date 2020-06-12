import Mock from "mockjs";

export default ({mock})=>{
	if(!mock) return;
	
	Mock.mock("/api/login/login",()=>{
		console.log("拦截到请求/api/login/login");
		return "mock返回";
	});
}