var $ = require('./jQuery2.1.js')
module.exports = function() {

	var news = [
		{
			link: 'http://view.inews.qq.com/a/20160830A02SEB00',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
			title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
			brif: '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...神＂轰炸机首次公开亮相神＂轰炸机首次公开亮相神＂轰炸机首次公开亮相神＂轰炸机首次公开亮相'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，12年11月14日，第九届中国国际...'
		},
		{
			link: 'http://view.inews.qq.com/a/20160828A007LB00',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531727868_150120/0',
			title: '传奇导弹专家冯·布劳恩：其实到美国后曾被当局忽视',
			brif: '小火箭出品本文作者：邢强博士原文标题：布劳12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，12年11月14日，恩博...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
			title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
			brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
		},
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '外媒称中国已经决心造出世界先进的航空发动机',
		// 	brif: '资料图：2012年11月14日，第九届中国国际...'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
		// 	brif: '嚣张（aggressive）这个词，腐国海军词，腐国海军词，腐国海军词，腐国海军词，腐国海军词，腐国海军词，腐国海军当...'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
		// 	brif: '西媒臆断老挝“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更亲越南'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '中国武警2016年征兵宣传片震撼首发',
		// 	brif: '中国武警2016年征兵宣“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更传片震撼首发'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
		// 	brif: '韩国多次宣称“一旦开战三“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更“弃华投美” 认为现政府更军”，靠谱吗？'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
		// 	brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
		// 	title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
		// 	brif: '中国空军演习加快反导能力建设 韩媒：或加快反导能力建设 韩媒：或加快反导能力建设 韩媒：或加快反导能力建设 韩媒：或针对“萨德'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '外媒称中国已经决心造出世界先进的航空发动机',
		// 	brif: '资料图：加快反导能力建设 韩媒：或加快反导能力建设 韩媒：或加快反导能力建设 韩媒：或加快反导能力建设 韩媒：或国际...'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
		// 	brif: '嚣张（aggressive）这个词加快反导能力建设 韩媒：或加快反导能力建设 韩媒：或加快反导能力建设 韩媒：或海军当...'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
		// 	brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '中国武警2016年征兵宣传片震撼首发',
		// 	brif: '中国武警2016年征兵宣传片震撼首发'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
		// 	brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
		// },
		// {
		// 	link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
		// 	img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
		// 	title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
		// 	brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
		// }
	]

	////////////////////////


	var FlowLayout = function ($target, setWidth) {
		this.$target = $target
		this.setWidth = setWidth
		this.tempArr = []

		this.colNum = parseInt(this.$target.width() / setWidth)
		for (var i = 0; i < this.colNum; i++) {
			this.tempArr[i] = 0
		}

		this.init()
		this.layout()
	}
	FlowLayout.prototype.init = function () {
		var _this = this
		$.each(news, function (idx, cellData) {
			var html =
				'<div class="cell">' +
				'<img src=' + cellData.img + ' style="width:' + _this.setWidth + 'px;"> ' +
				'<h4>' + cellData.title + '</h4>' +
				'<p>' + cellData.brif + '</p> ' +
				'</div>'
			_this.$target.append(html)
		})
	}
	FlowLayout.prototype.layout = function () {
		var _this = this
		// console.log(_this.tempArr)
		_this.$target.find('.cell').each(function (index) {

			console.log('~~> '+ index)
			var r = _this.getMinMax(_this.tempArr)
			var minIndex = r.min
			var minValue = _this.tempArr[minIndex]
			var maxIndex = r.max
			var maxValue = _this.tempArr[maxIndex]
			console.log('    max: ' + maxValue + ' min: ' + minValue)

			$(this).css({
				'width': _this.setWidth + 'px',
    	        'border': '5px red solid',
    	        'box-shadow': '0rem 0rem 2rem 0rem yellowgreen',
            	'position': 'absolute',
				'top': _this.tempArr[minIndex] + 10 + 'px',
				'left': _this.setWidth * minIndex + 0 + 'px',
				'margin-left': '10px'
			})

			var showHeight = $(this).outerHeight()
			console.log('  > H: ' + (maxValue))

			_this.tempArr[minIndex] += showHeight
			_this.$target.css('height', maxValue + showHeight + 'px')

			console.log('  > [' + _this.tempArr + ']')
		})

		var r = _this.getMinMax(_this.tempArr)
		var maxIndex = r.max
		var maxValue = _this.tempArr[maxIndex]
		console.log("---- done ---- " + maxValue)
		_this.$target.css('height', maxValue + 'px')
	}
	FlowLayout.prototype.getMinMax = function (arr) {
		var minIndex = 0, maxIndex = 0
		var minValue = arr[minIndex]
		var maxValue = minValue
		var resule = {}
		for (var i = 1; i < arr.length; i++) {
			if (minValue > arr[i]) {
				minValue = arr[i]
				minIndex = i
			}
			if (maxValue < arr[i]) {
				maxValue = arr[i]
				maxIndex = i
			}
		}
		resule.max = maxIndex
		resule.min = minIndex
		return resule
	}

	return FlowLayout
}