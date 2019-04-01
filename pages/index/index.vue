<template>
	<view class="button-sp-area">
		<button type="primary" plain="true" @click="list">串口列表</button>
		<button type="primary" plain="true" @click="open">打开串口</button>
		<button type="primary" @click="init">初始化</button>
		<button type="primary" @click="list">串口列表()</button>
		<button type="primary" @click="status">状态</button>
		<button type="primary" @click="version">版本号</button>
		<button type="primary" @click="setNo">写入序列号</button>
		<button type="primary" @click="getNo">读取序列号</button>
		<button type="primary" @click="formfeed">进纸</button>
		<button type="primary" @click="unwind">退纸</button>
		<view type="primary">
			<input type="text" id="piaocheng" value="10" /><button type="button" @click="setLength">设置票长(毫米)</button>
		</view>
		<button type="primary" @click="getLeng">获取票长</button>
		<button type="primary" @click="cut">切票</button>
		<button type="primary" @click="test">走纸测试</button>
	</view>
</template>

<script>
	import Lottery from '../../components/lottery'
	// const plugins = require('../../common/plugins.js');
	// const modal = uni.requireNativePlugin('modal');
	// const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');
	// const PGSerialPort = uni.requireNativePlugin('SerialPort');
	
	export default {
		data() {
			return {
				title: ''
				// Lottery: Lottery
			}
		},
		onLoad() {

		},
		methods: {
			list() {
				Lottery.one.list();
			},
			open() {
				Lottery.one.open();
			},
			init() {
				Lottery.one.init();
			},
			status() {
				Lottery.one.status();
			},
			version() {
				Lottery.one.version();
			},
			setNo() {
				Lottery.one.setNo();
			},
			getNo() {
				Lottery.one.getNo();
			},
			formfeed() {
				Lottery.one.formfeed();
			},
			unwind() {
				Lottery.one.unwind();
			},
			setLeng() {
				Lottery.one.setLeng();
			},
			cut() {
				Lottery.one.cut();
			}
		}
	}
</script>

<style>
	button {
		margin-top: 30upx;
		margin-bottom: 30upx;
	}

	.button-sp-area {
		margin: 0 auto;
		width: 60%;
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	.wrapper {
		flex-direction: column;
		justify-content: center;
	}

	.button {
		width: 200px;
		margin-top: 30px;
		margin-left: 20px;
		padding-top: 20px;
		padding-bottom: 20px;
		border-width: 2px;
		border-style: solid;
		border-color: #458B00;
		background-color: #458B00;
	}

	.text {
		font-size: 30px;
		color: #666666;
		text-align: center;
	}
</style>
