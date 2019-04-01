! function(root, factory) {
	if (typeof exports == 'object' && typeof module != 'undefined') {
		module.exports = factory()
	} else if (typeof define == 'function' && define.amd) {
		define(factory)
	} else {
		// 5+ 兼容
		document.addEventListener('plusready', function() {
			// 修改此处为插件命名
			const moduleName = 'serialport';
			// 挂载在plus下
			root.plus[moduleName] = factory()
		}, false);
	}
}(this, function() {
	//在此处定义自己的方法
	let result = {msg:'', status: 1};
	const PG = uni.requireNativePlugin('SerialPort');
	class plugin {
		constructor() {
			this.path = '';
			this.baudrate = 19200;
			return this
    }
		list () {
			return new Promise(function(resolve, reject){
				PG.List(resolve);
			}).catch(function (error) {//加上catch 
          console.log(error);
      })
		}
		open (path, baudrate) {
			return new Promise(function(resolve, reject){
				PG.Open(path, baudrate, resolve);
			}).catch(function (error) {//加上catch 
          console.log(error);
      })
		}
		send (cmd, func) {
			return new Promise(function(resolve, reject){
				PG.Send(cmd, resolve);
			}).catch(function (error) {//加上catch 
          console.log(error);
      })
		}
		close () {
			return new Promise(function(resolve, reject){
				PG.Close(resolve);
			}).catch(function (error) {//加上catch 
          console.log(error);
      })
		}
	};
	
	return new plugin;
});
