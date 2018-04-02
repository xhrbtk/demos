var $ = require('./jQuery2.1.js')
module.exports = function() {

        var rowList = []
        var WaterFlow = function(target, url, preHeight) {
            this.$target = $(target)
            this.imgUr = url
            this.preHeight = preHeight
            this.init() 
        }
        WaterFlow.prototype.init = function() {
            var _this = this
            var img = new Image()
            img.onload = function () {
                var preElm = _this.preJustify(_this.preHeight, img)
                _this.renderElm(preElm)
            }
            img.src = _this.imgUr
        }
        WaterFlow.prototype.preJustify = function(preHeight, elm) {
            var orign_H = elm.height
            var orign_W = elm.width
            var preElm = {
                elm: elm,
                height: preHeight,
                width: orign_W * preHeight / orign_H
            }
            return preElm
        }
        WaterFlow.prototype.renderElm = function(info) {
            var _this = this
            var rowSum = 0
            var _rowHeight = 0
            var lastInfo = info
            rowList.push(info)
            var _rowList = rowList
            var flickrWidth = _this.$target.width()
            // console.log('in render: ' + info)

            $.each(_rowList, function (idx, elmInfo) {
                rowSum += elmInfo.width // [1,2,3]
                // console.log('compare rowSum: ' + rowSum + ' flcW: '+ flickrWidth)
                if (rowSum > flickrWidth) {
                    // console.log('🚗')
                    // 去除最后一个,得到完整的一行
                    _rowList.pop()                                   // [1,2]
                    var _k = flickrWidth / (rowSum - lastInfo.width)
                    _rowHeight = elmInfo.height * _k
                    // 创建行，并对行内所有元素调整
                    _this.createAndLayoutInRow(_rowHeight)
 
                    rowList = []
                    rowList.push(lastInfo)                         // [3]
                }
            })
        }
        WaterFlow.prototype.createAndLayoutInRow = function(rowHeight) {
            var _this = this
            var row = $('<div class="clearFix"></div>')
            $.each(rowList, function (idx, rowCell) {
                var $imgCt = $('<div style="float: left; margin-top: 5px; margin-bottom: 5px"></div>')
                var $elm = $(rowCell.elm)
                $elm.height(rowHeight)
                $imgCt.append($elm)
                row.append($imgCt)
            })
            // // console.log(row)
            _this.$target.append(row)
        }
    return WaterFlow 
}