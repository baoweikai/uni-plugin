/**
 * --------------------------------------------------------------------------
 * 彩票机: lottery.js
 * --------------------------------------------------------------------------
 */
const Lottery = function() {
	const SP = require('../common/SerialPort.js');
	/**
	 * ------------------------------------------------------------------------
	 * Constants
	 * ------------------------------------------------------------------------
	 */
	const NAME = 'Lottery'; // 名称
	const VERSION = '4.1.3'; // 版本号
	const DATA_KEY = 'bs.Lottery'; // 数据KEY
	/* 默认值 */
	const Default = {
		port: '/dev/ttyS4', // 串口地址
		baudrate: 19200 // 波特率
	};
	// 获取所有串口地址
	const serialList = function() {
		const result = SP.list();
		if (result.code == 1) {
			return result.data;
		} else {
			return [];
		}
	};
	const One = function() {
		function One(port) {
			this.port = '/dev/ttyS4'; // 串口地址
			this.baudrate = 19200; // 波特率
			this.code; // 状态, 发送中,接受中,等待中
			this.valid; // 是否有效的串口
		}; // Getters
		// 错误反馈
		const errors = {
			5002: '进票口没票',
			5003: '弯板错误：弯板没有到位或者弯板压到位后弯板传感器没有信号',
			5004: '进票卡纸',
			5005: '退票卡纸',
			5007: '掉票传感器错误：撕票出票口掉纸错误，还有票未掉落',
			5008: '票长设置长度错误',
			5009: '通讯出错',
			5010: '序列号错误',
			5013: '切刀错误：弯板复位后弯板传感器还有信号',
			5014: '掉票传感器错误：切票时弯板压紧后掉票传感器没有检测到票',
			5015: '开机时机器中间的位置传感器有票'
		};
		// 状态值
		const states = {
			0: '状态正常',
			1: '离线状态',
			2: '无票状态',
			3: '切刀错误',
			4: '通道卡纸',
			5: '上纸状态',
			6: '走纸过位',
			7: '票长度设置异常',
			8: '其它错误'
		};
		// 动作集合
		const actis = {
			'init': {
				'comm': '01',
				'param': []
			}, // 初始化
			'status': {
				'comm': '02',
				'param': []
			}, // 查询状态
			'version': {
				'comm': '04',
				'param': ['00']
			}, // 读版本号
			'getNo': {
				'comm': '05',
				'param': ['00']
			}, // 读序列号
			'setNo': {
				'comm': '05',
				'param': ['01', '12', '34']
			}, // 写入列号
			'formfeed': {
				'comm': '0c',
				'param': ['00', '05', '06']
			}, // 进纸张
			'unwind': {
				'comm': '0c',
				'param': ['01', '05', '06']
			}, // 后退纸张
			'getLeng': {
				'comm': '31',
				'param': ['00']
			}, // 获取票长
			'setLeng': {
				'comm': '31',
				'param': ['01', 'fc', '04']
			}, // 设置票长
			'cut': {
				'comm': '32',
				'param': []
			}, // 切票
			'test': {
				'comm': '50',
				'param': []
			} // 测试
		};

		const _proto = One.prototype;
		// 串口列表
		_proto.list = function() {
			SP.list().then(res => {
				console.log(res.msg)
			});
		};
		// 打开串口
		_proto.open = function() {
			const self = this;
			const types = {
				'01': 'init', // 初始化
				'02': 'status', // 查询状态
				'04': 'version', // 读版本号
				'0500': 'getNo', // 读序列号
				'0501': 'setNo', // 写入列号
				'0c00': 'formfeed', // 进纸张
				'0c01': 'unwind', // 后退纸张
				'3100': 'getLeng', // 获取票长
				'3101': 'setLeng', // 设置票长
				'32': 'cut', // 切票
				'50': 'test' // 测试
			}
			
			SP.open(this.port, this.baudrate).then(res => {
				console.log(res.msg)
			});
		};
		// 初始化
		_proto.init = function init() {
			this.send('init');
		};
		// 状态
		_proto.status = function() {
			this.send('status');
		};
		// 版本号
		_proto.version = function() {
			this.send('version');
		};
		// 获取序列号
		_proto.getNo = function() {
			this.send('getNo');
		};
		// 设置序列号
		_proto.setNo = function() {
			this.send('setNo');
		};
		// 切纸
		_proto.cut = function() {
			this.send('cut');
		};
		// 进纸
		_proto.formfeed = function() {
			this.send('formfeed');
		};
		// 退纸
		_proto.unwind = function() {
			this.send('unwind');
		}
		// 获取票长
		_proto.getLeng = function() {
			this.send('getLeng');
		};
		// 设置票长
		_proto.setLeng = function(length) {
			const leng = (length * 10).toString(16),
				l = leng.length,
				param = [];
			switch (l) {
				case 1:
					param = ['0' + leng, '00'];
					break;
				case 2:
					param = [leng, '00'];
					break;
				case 3:
					param = [leng.substr(1), '0' + leng.substr(0, 1)];
					break;
				case 4:
					param = [leng.substr(2), leng.substr(0, 1)];
					break;
				default:
					param = [leng.substr(-2), leng.substr(-4, 2)];
					break;
			}
			this.send('setLeng', param);
		};
		// 成功处理办法
		_proto.success = function(type, data) {
			switch (type) {
				case 'status':
					const code = parseInt(data, 16);

					if (state == 0) {
						return true;
					} else {
						console.log(states[code]);
						return false;
					}
					break;
				case 'init':
					serials.push(this);
					console.log('成功');
					break;
				case 'version':
					console.log('成功,返回数据为:' + data);
					break;
				case 'getNo':
					console.log('成功,返回数据为:' + data);
					break;
				case 'setNo':
					console.log('成功');
					break;
				case 'formfeed':
					console.log('成功');
					break;
				case 'unwind':
					console.log('成功');
					break;
				case 'getLeng':
					console.log('成功,返回数据为:' + parseInt(data, 16));
					break;
				case 'setLeng':
					console.log('成功');
					break;
				case 'cut':
					console.log('成功');
					break;
				default:
					console.log('成功,返回数据:' + data);
					break;
			}
		};
		// 错误处理
		_proto.faile = function(type, data) {
			console.log(data.msg)
		};
		// 发送命令
		_proto.send = function(type, param) {
			const comm = this.format(actis[type]['comm'], param == undefined ? actis[type]['param'] : param);
			const self = this;
			SP.send(comm).then(result => {
				if (result.code == 200) {
					const bytes = result.data.match(/\w{2}/gi),
						l = bytes.length;
					const head = bytes[0] + bytes[1]; // 应答头
					if (head == '4552') {
						const errHex = bytes[l - 2] + bytes[l - 3];
						console.log(errors[parseInt(errHex, 16)]); // 错误提示
						self.faile(type, result)
					} else if (head == '4F4B') {
						const size = result.data.length;
						self.success(type, result.data.substring(14, size - 2));
					} else {
						//res = this.code()
					}
				} else {
					self.faile(type, result)
				}
			});
	

		};
		// 拼装命令
		_proto.format = function(commChar, commParas) {
			let data = ['1b', '11', '01', '00'];
			data[4] = (8 + commParas.length).toString(16);
			data[4] = data[4].length < 2 ? '0' + data[4] : data[4];
			data[5] = '00'; // 字串长度第二字节
			data[6] = commChar; // 命令字
			let xor = parseInt(data[0], 16) ^ parseInt(data[1], 16) ^ parseInt(data[2], 16) ^
				parseInt(data[3], 16) ^ parseInt(data[4], 16) ^ parseInt(data[5], 16) ^ parseInt(data[6], 16);

			for (const i in commParas) {
				data[7 + i] = commParas[i];
				xor ^= parseInt(commParas[i], 16);
			}
			let commoand = data.join('');
			const xorStr = xor.toString(16);
			commoand += xorStr.length < 2 ? '0' + xorStr : xorStr;

			return commoand;
		};

		return One;
	}();
	// 彩票机2,新彩票机
	const Tow = function() {
		function Tow(port) {
			this.port = port; // 串口地址
			this.baudrate = 19200; // 波特率
			this.code; // 状态, 发送中,接受中,等待中
			this.valid; // 是否有效的串口
		}
		// 错误反馈
		const errors1 = {
			1: '出纸口有/无票',
			4: '有/无任务',
			5: '电压正常/错误',
			6: '通道正常/塞纸',
			7: '翻版正常/错误'
		};
		const errors2 = {
			5: '上纸正常/错误',
			6: '上次出票正常/失败',
			7: '通道有/无纸'
		};
		// 状态码
		const codes = {
			'0x55,0x04,0x30,0x10': '无出票任务状态',
			'0x55,0x04,0x31,0x20': '等待切票状态。在切票之前必须发送 1b 76 31,使处于该状态。',
			'0x55,0x04,0x32,0x20': '正在切票状态。出票模块已正确接收到切票指令，并已启动切票。',
			'0x55,0x04,0x32,0x51': '重复接收到切票指令。模块返回此状态时，不启动切票。该状态码出现在上一次的切票状态未被查询时。',
			'0x55,0x04,0x33,0x20': '正在出票状态。',
			'0x55,0x04,0x34,0x20': '出票成功。',
			'0x55,0x04,0x34,0x51': '出票失败。',
			'0x55,0x04,0x35,ID': '上层没有按工作流程依次查询。其中的 ID 为出票模块 当前的工作过程 ID 号，上层接收到该状态码后，需要 按照此 ID 重新查询。',
			'0x55,0x04,0x31,0x02': '该状态码出现在发送切票指令(1d 56 42 n)后，此 时出票模块状态异常，会返回此码。',
			'0x55,0x04,0x31,0x01': '该状态码出现在发送切票指令(1d 56 42 n)后，表 明出票模块当前有其他任务，需要上层等待。',
			'0x55,0x05,0x32,N': '该状态码出现在发送切票指令(1d 56 42 n)后，表 明 表明上层下发的彩票种类与先前设定的票种不一致。上层需要根据返回的 N 值重新下发切票指令。在接收 到正确的切票指令前，机器一直处于等待切票指令状态。'
		};
		// 动作集合, 彩票 m 的票长(2 个字节)，彩票长度单位:mm。 m 取值 1-15
		const actis = {
			'status': ['1b', '76', '30'], // 查询状态
			'reset': ['1B', '01', '23'], // 复位 无返回值。 打印机接收到该指令后，会执行复位动作，效果相当于机器重新开电。
			'address': ['1B', '30', 'm'], // 设置485地址, m 为地址，无返回值
			'setType': ['1B', '3C', 'm'], // 设定票种 m 为彩票类型，返回彩票 m 的票长
			'getType': ['1B', '4E'], // 返回当前设定的彩票类型(1 个字节)
			'name': ['1D', '49', '43'], // 读取产品名称
			'sn': ['1D 49 46'], // 读取SN序列号
			'getLeng': ['1B', '4C', 'm'], // 获取票长, m 为彩票类型，返回彩票 m 的票长
			'setLeng': ['1B', '4D', 'm', 'a', 'b'], // 设置票长, m 为彩票类型，a 为票长低字节，b 为票长高字节
			'cut': ['1D', '56', '42', 'N'], // 切票
			'test': ['1B', '38'], // 排错
			'clear': ['1B', '39'] // 翻板拍打动作指令, 为了解决切票完成后彩票卡在通道内，建议发送该指令
		};

		const _proto = Tow.prototype;
		// 串口列表
		_proto.serials = function() {
				serialList();
			},
			_proto.code = function() {
				send('status')
			},
			// 发送命令
			_proto.send = function(type, param) {
				const comm = this.format(actis[type]);

				SP.Send(this.port, this.baudrate, comm,
					function(result) {
						if (result.code == 200) {
							const bytes = result.data.match(/\w{2}/gi);
							const state1 = parseInt(bytes[1], 16).toString(2),
								state2 = parseInt(bytes[2], 16).toString(2),
								code = bytes[6] + bytes[7] + bytes[8] + bytes[9];
							// State1相关错误
							const err = '';
							for (let i in errors1) {
								if (state1[i] == 1) {
									err = errors1[i];
									console.log(err)
									return false;
								}
							}
							// State2相关错误
							for (i in errors2) {
								if (state2[i] == 1) {
									err = errors2[i];
									console.log(err)
									return false;
								}
							}
							codes[code];
						}
					},
					function(result) {
						console.log(result.msg)
					}
				);
			},
			// 格式化指令
			_proto.format = function(paras) {
				// 起始码:1 个字节，固定为 0x21。
				// 地址码:1 个字节，彩票模块地址(0x31~0x4F)。
				// 类型码:1 个字节，固定为 0xFF。
				// 命令码:1 个字节，固定为 0x20。
				let data = ['21', '50', 'ff', '20']
				// 数据长度:1 个字节，数据长度 LENTH 是指数据内容 INFO 的长度
				data[4] = (paras.length).toString(16);
				data[4] = data[4].length < 2 ? '0' + data[4] : data[4];
				// 校验和:1 个字节，SUM 为 0x21 开始到 SUM 前的所有字节的累加和，取低字节。
				const sum = parseInt(data[0], 16) + parseInt(data[1], 16) + parseInt(data[2], 16) +
					parseInt(data[3], 16) + parseInt(data[4], 16);
				// 数据内容:commParas 为彩票机控制指令
				for (let i in paras) {
					data[5 + i] = paras[i];
					sum += parseInt(paras[i], 16);
				}
				const commoand = data.join('');
				const sumStr = sum.toString(16);
				commoand += sumStr.length > 2 ? sumStr.substr(-2) : sumStr;
				commoand += '16';

				return commoand;
			}

		return Tow;
	}();

	const list = function() {
		// const list = serialList()
		const list = ['/dev/ttyS0', '/dev/ttyS1', '/dev/ttyS2', '/dev/ttyS3', '/dev/ttyS4']; // 所有串口地址
		const l = list.length;
		for (let i in list) {
			if (list[i].match(/\/dev\/ttyS\d/g)) {
				const tow = new One(list[i]);
				tow.init();
			}
		}
	}
	// list();

	// const one = new One(Default.port);
	return {
		'one': new One(Default.port),
		'tow': new Tow(Default.port)
	};
}();
export default Lottery;
