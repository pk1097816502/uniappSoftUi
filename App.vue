<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			this.$http.api({
				url:"/api/login/login",
				success:(res)=>{
					console.log("/api/login/login获得的结果",res);
				}
			});
			// #ifdef MP-WEIXIN
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* @import url("//at.alicdn.com/t/font_1854820_ndamh6d6m9a.css"); */
	@import url("@/static/style/defalut.scss");
</style>
