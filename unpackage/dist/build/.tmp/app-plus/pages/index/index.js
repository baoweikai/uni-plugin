(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"461b":function(t,n,e){"use strict";(function(n){function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}!function(n,e){t.exports=e()}(0,function(){var t={msg:"",status:1},o=n.requireNativePlugin("SerialPort"),a=function(){function n(){return e(this,n),this.path="",this.baudrate=19200,o.JSReturn(n.JSReturn),this}return r(n,[{key:"list",value:function(){o.List()}},{key:"open",value:function(t,n,e){o.Open([t,n],e)}},{key:"send",value:function(t){o.Send(t)}},{key:"close",value:function(){o.Close()}}],[{key:"JSReturn",value:function(n){t=n,console.log(t.msg)}}]),n}();return new a})}).call(this,e("649d")["default"])},"590c":function(t,n,e){"use strict";e.r(n);var o=e("6a81"),r=e("7051");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("830c");var i=e("2877"),s=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports},6403:function(t,n,e){},"649d":function(t,n,e){"use strict";e.r(n);var o=function(t){return"function"===typeof t},r=function(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})},a=/^on|^create|Sync$|Manager$|^pause/,i=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(t){return(!a.test(t)||"createBLEConnection"===t)&&!~i.indexOf(t)},u=function(t){return function(){for(var n=arguments.length,e=Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(i.success)||o(i.fail)||o(i.complete)?t.apply(void 0,[i].concat(e)):r(new Promise(function(n,o){t.apply(void 0,[Object.assign({},i,{success:n,fail:o})].concat(e)),Promise.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})}}))}},c=1e-4,f=750,l=!1,d=0,p=0;function v(){var t=wx.getSystemInfoSync(),n=t.platform,e=t.pixelRatio,o=t.windowWidth;d=o,p=e,l="ios"===n}function h(t,n){if(0===d&&v(),0===t)return 0;var e=t/f*(n||d);return e<0&&(e=-e),e=Math.floor(e+c),0===e?1!==p&&l?.5:1:t<0?-e:e}function g(t){return __requireNativePlugin__(t)}var m={},b={os:{plus:!0}};"undefined"!==typeof Proxy?m=new Proxy({},{get:function(t,n){return b.hasOwnProperty(n)?b[n]:"upx2px"===n?h:"requireNativePlugin"===n?g:wx.hasOwnProperty(n)?s(n)?u(wx[n]):wx[n]:void 0}}):(m.upx2px=h,m.requireNativePlugin=g,Object.keys(b).forEach(function(t){m[t]=b[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(s(t)?m[t]=u(wx[t]):m[t]=wx[t])}));var y=m;n["default"]=y},"6a81":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"button-sp-area"},[e("button",{attrs:{type:"primary",plain:"true",eventid:"6752350e-0"},on:{click:t.list}},[t._v("串口列表")]),e("button",{attrs:{type:"primary",plain:"true",eventid:"6752350e-1"},on:{click:t.open}},[t._v("打开串口")]),e("button",{attrs:{type:"primary",eventid:"6752350e-2"},on:{click:t.init}},[t._v("初始化")]),e("button",{attrs:{type:"primary",eventid:"6752350e-3"},on:{click:t.list}},[t._v("串口列表()")]),e("button",{attrs:{type:"primary",eventid:"6752350e-4"},on:{click:t.status}},[t._v("状态")]),e("button",{attrs:{type:"primary",eventid:"6752350e-5"},on:{click:t.version}},[t._v("版本号")]),e("button",{attrs:{type:"primary",eventid:"6752350e-6"},on:{click:t.setNo}},[t._v("写入序列号")]),e("button",{attrs:{type:"primary",eventid:"6752350e-7"},on:{click:t.getNo}},[t._v("读取序列号")]),e("button",{attrs:{type:"primary",eventid:"6752350e-8"},on:{click:t.formfeed}},[t._v("进纸")]),e("button",{attrs:{type:"primary",eventid:"6752350e-9"},on:{click:t.unwind}},[t._v("退纸")]),e("view",{attrs:{type:"primary"}},[e("input",{attrs:{type:"text",id:"piaocheng",value:"10"}}),e("button",{attrs:{type:"button",eventid:"6752350e-10"},on:{click:t.setLength}},[t._v("设置票长(毫米)")])],1),e("button",{attrs:{type:"primary",eventid:"6752350e-11"},on:{click:t.getLeng}},[t._v("获取票长")]),e("button",{attrs:{type:"primary",eventid:"6752350e-12"},on:{click:t.cut}},[t._v("切票")]),e("button",{attrs:{type:"primary",eventid:"6752350e-13"},on:{click:t.test}},[t._v("走纸测试")])],1)},r=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return r})},7051:function(t,n,e){"use strict";e.r(n);var o=e("c876"),r=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=r.a},"830c":function(t,n,e){"use strict";var o=e("6403"),r=e.n(o);r.a},"9ae4":function(t,n,e){"use strict";e("a3f2");var o=a(e("b0ce")),r=a(e("590c"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(r.default))},b0ce:function(t,n,e){"use strict";e.r(n);var o=e("f3d3"),r=e.n(o);function a(t,n,e){var o,r=t.$options[n];if("onError"===n&&r&&(r=[r]),"function"===typeof r&&(r=[r]),r)for(var i=0,s=r.length;i<s;i++)o=r[i].call(t,e);return t._hasHookEvent&&t.$emit("hook:"+n),t.$children.length&&t.$children.forEach(function(t){return a(t,n,e)}),o}function i(t){return t.$vm.$root}n["default"]=function(t){return{data:{$root:{}},onLoad:function(n){var e=new r.a(t);this.$vm=e;var o=e.$root;o.__wxExparserNodeId__=this.__wxExparserNodeId__,o.__wxWebviewId__=this.__wxWebviewId__,o.$mp||(o.$mp={});var a=o.$mp;a.mpType="page",a.page=this,a.query=n,a.status="load",e.$mount()},handleProxy:function(t){var n=i(this);return n.$handleProxyWithVue(t)},onShow:function(){var t=i(this),n=t.$mp;n.status="show",a(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=i(this),n=t.$mp;n.status="ready",a(t,"onReady")},onHide:function(){var t=i(this),n=t.$mp;n.status="hide",a(t,"onHide")},onUnload:function(){var t=i(this);a(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=i(this);a(t,"onPullDownRefresh")},onReachBottom:function(){var t=i(this);a(t,"onReachBottom")},onPageScroll:function(t){var n=i(this);a(n,"onPageScroll",t)},onTabItemTap:function(t){var n=i(this);a(n,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var n=i(this);return a(n,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var n=i(this);a(n,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var n=i(this);a(n,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var n=i(this);a(n,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var n=i(this);a(n,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var n=i(this);return a(n,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},b44a:function(t,n,e){"use strict";function o(t){throw new Error('"'+t+'" is read-only')}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){var t=e("461b"),n={port:"/dev/ttyS4",baudrate:19200},r=function(){var n=t.list();return 1==n.status?n.data:[]},a=function(){function n(t){this.port="/dev/ttyS4",this.baudrate=19200,this.status,this.valid}var e={5002:"进票口没票",5003:"弯板错误：弯板没有到位或者弯板压到位后弯板传感器没有信号",5004:"进票卡纸",5005:"退票卡纸",5007:"掉票传感器错误：撕票出票口掉纸错误，还有票未掉落",5008:"票长设置长度错误",5009:"通讯出错",5010:"序列号错误",5013:"切刀错误：弯板复位后弯板传感器还有信号",5014:"掉票传感器错误：切票时弯板压紧后掉票传感器没有检测到票",5015:"开机时机器中间的位置传感器有票"},r={0:"状态正常",1:"离线状态",2:"无票状态",3:"切刀错误",4:"通道卡纸",5:"上纸状态",6:"走纸过位",7:"票长度设置异常",8:"其它错误"},a={init:{comm:"01",param:[]},status:{comm:"02",param:[]},version:{comm:"04",param:["00"]},getNo:{comm:"05",param:["00"]},setNo:{comm:"05",param:["01","12","34"]},formfeed:{comm:"0c",param:["00","05","06"]},unwind:{comm:"0c",param:["01","05","06"]},getLeng:{comm:"31",param:["00"]},setLeng:{comm:"31",param:["01","fc","04"]},cut:{comm:"32",param:[]},test:{comm:"50",param:[]}},i=n.prototype;return i.list=function(){t.list()},i.open=function(){t.open(this.port,this.baudrate,function(t){if(1==t.status){var n=t.data.match(/\w{2}/gi),o=n.length,r=n[0]+n[1];if("4552"==r){var a=n[o-2]+n[o-3];console.log(e[parseInt(a,16)]),self.faile(type,t.data)}else if("4F4B"==r){var i=t.data.length;self.success(type,t.data.substring(14,i-2))}}else self.faile(type,t.data)})},i.init=function(){this.send("init")},i.status=function(){this.send("status")},i.version=function(){this.send("version")},i.getNo=function(){this.send("getNo")},i.setNo=function(){this.send("setNo")},i.cut=function(){this.send("cut")},i.formfeed=function(){this.send("formfeed")},i.unwind=function(){this.send("unwind")},i.getLeng=function(){this.send("getLeng")},i.setLeng=function(t){var n=(10*t).toString(16),e=n.length,r=[];switch(e){case 1:o("param"),r=["0"+n,"00"];break;case 2:o("param"),r=[n,"00"];break;case 3:o("param"),r=[n.substr(1),"0"+n.substr(0,1)];break;case 4:o("param"),r=[n.substr(2),n.substr(0,1)];break;default:o("param"),r=[n.substr(-2),n.substr(-4,2)];break}this.send("setLeng",r)},i.test=function(){this.send("test")},i.success=function(t,n){switch(t){case"status":var e=parseInt(n,16);return 0==e||(console.log(r[parseInt(result,16)]),!1);case"init":serials.push(this),console.log(this.port+"初始化完成");break;case"version":console.log("当前版本号:"+n);break;case"getNo":console.log("当前序列号:"+n);break;case"setNo":console.log("写入序列号成功");break;case"formfeed":console.log("进纸成功");break;case"unwind":console.log("退纸成功");break;case"getLeng":console.log("当前票长:"+parseInt(n,16));break;case"setLeng":console.log("设置票长成功");break;case"cut":console.log("切票成功");break;default:console.log("成功,返回数据:"+n);break}},i.faile=function(t,n){},i.send=function(n,e){var o=this.format(a[n]["comm"],void 0==e?a[n]["param"]:e);a[n]["param"].length;t.send(o)},i.format=function(t,n){var e=["1b","11","01","00"];e[4]=(8+n.length).toString(16),e[4]=e[4].length<2?"0"+e[4]:e[4],e[5]="00",e[6]=t;var o=parseInt(e[0],16)^parseInt(e[1],16)^parseInt(e[2],16)^parseInt(e[3],16)^parseInt(e[4],16)^parseInt(e[5],16)^parseInt(e[6],16);for(var r in n)e[7+r]=n[r],o^=parseInt(n[r],16);var a=e.join(""),i=o.toString(16);return a+=i.length<2?"0"+i:i,a},n}(),s=function(){function n(t){this.port=t,this.baudrate=19200,this.status,this.valid}var e={1:"出纸口有/无票",4:"有/无任务",5:"电压正常/错误",6:"通道正常/塞纸",7:"翻版正常/错误"},a={5:"上纸正常/错误",6:"上次出票正常/失败",7:"通道有/无纸"},s={"0x55,0x04,0x30,0x10":"无出票任务状态","0x55,0x04,0x31,0x20":"等待切票状态。在切票之前必须发送 1b 76 31,使处于该状态。","0x55,0x04,0x32,0x20":"正在切票状态。出票模块已正确接收到切票指令，并已启动切票。","0x55,0x04,0x32,0x51":"重复接收到切票指令。模块返回此状态时，不启动切票。该状态码出现在上一次的切票状态未被查询时。","0x55,0x04,0x33,0x20":"正在出票状态。","0x55,0x04,0x34,0x20":"出票成功。","0x55,0x04,0x34,0x51":"出票失败。","0x55,0x04,0x35,ID":"上层没有按工作流程依次查询。其中的 ID 为出票模块 当前的工作过程 ID 号，上层接收到该状态码后，需要 按照此 ID 重新查询。","0x55,0x04,0x31,0x02":"该状态码出现在发送切票指令(1d 56 42 n)后，此 时出票模块状态异常，会返回此码。","0x55,0x04,0x31,0x01":"该状态码出现在发送切票指令(1d 56 42 n)后，表 明出票模块当前有其他任务，需要上层等待。","0x55,0x05,0x32,N":"该状态码出现在发送切票指令(1d 56 42 n)后，表 明 表明上层下发的彩票种类与先前设定的票种不一致。上层需要根据返回的 N 值重新下发切票指令。在接收 到正确的切票指令前，机器一直处于等待切票指令状态。"},u={status:["1b","76","30"],reset:["1B","01","23"],address:["1B","30","m"],setType:["1B","3C","m"],getType:["1B","4E"],name:["1D","49","43"],sn:["1D 49 46"],getLeng:["1B","4C","m"],setLeng:["1B","4D","m","a","b"],cut:["1D","56","42","N"],test:["1B","38"],clear:["1B","39"]},c=n.prototype;return c.serials=function(){r()},c.status=function(){send("status")},c.send=function(n,r){var c=this.format(u[n]);t.Send(this.port,this.baudrate,c,function(t){if(1==t.status){var n=t.data.match(/\w{2}/gi),r=parseInt(n[1],16).toString(2),u=parseInt(n[2],16).toString(2),c=n[6]+n[7]+n[8]+n[9],f="";for(var l in e)if(1==r[l])return o("err"),f=e[l],console.log(f),!1;for(i in a)if(1==u[i])return o("err"),f=a[i],console.log(f),!1;s[c]}},function(t){console.log(t.msg)})},c.test=function(){var t=this.format(u["status"]),n=27;console.log(t),console.log(n.toString(16))},c.format=function(t){var n=["21","50","ff","20"];n[4]=t.length.toString(16),n[4]=n[4].length<2?"0"+n[4]:n[4];var e=parseInt(n[0],16)+parseInt(n[1],16)+parseInt(n[2],16)+parseInt(n[3],16)+parseInt(n[4],16);for(var r in t)n[5+r]=t[r],e+=(o("sum"),parseInt(t[r],16));var a=n.join(""),i=e.toString(16);return a+=(o("commoand"),i.length>2?i.substr(-2):i),a+=(o("commoand"),"16"),a},n}();return{one:new a(n.port),tow:new s(n.port)}}(),a=r;n.default=a},c876:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("b44a"));function r(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{title:""}},onLoad:function(){},methods:{list:function(){o.default.one.list()},open:function(){o.default.one.open()},init:function(){o.default.one.init()},status:function(){o.default.one.status()},version:function(){o.default.one.version()},setNo:function(){o.default.one.setNo()},getNo:function(){o.default.one.getNo()},formfeed:function(){o.default.one.formfeed()},unwind:function(){o.default.one.unwind()},setLeng:function(){o.default.one.setLeng()},cut:function(){o.default.one.cut()}}};n.default=a}},[["9ae4","common/runtime","common/vendor"]]]);