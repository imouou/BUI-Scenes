
// bui.isWebapp 为true时, 如果拿不到数据,请确认是否已经开启跨域的谷歌;
// bui.isWebapp 为false, 会使用原生方法请求,请检查页面有没有引入 Cordova.js 及 bingotouch.js;
bui.isWebapp = true;

// 网站配置
var sitePath = "http://www.easybui.com",
	siteDir = sitePath + "/demo/json/";
