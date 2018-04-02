var $ = require('./jQuery2.1.js')
module.exports = (function() {
    var _SliderBanner = function(target, width, auto, callback) {
        this.$target = $(target)
        this.btnWidth = 60 
        this.width = width - 2 * this.btnWidth
        this.auto = auto
        this.indexPage = 0
        var timer_auto
        this.timer_auto = timer_auto
        this.callback = callback
        this.initElement();
        this.bind();
        this.autoPlay();
    }
    // init: btn + cell + bottomDiv(indicator)
    _SliderBanner.prototype.initElement = function () {
        var $cells = this.$target.children().wrapAll('<div class="wrapView-SliderBanner clearFix"></div>')
        $cells.wrapAll('<div class="out-SliderBanner clearFix"></div>')
        var $wrapView = this.$target.children().css({
            "position": "relative",
            "background": "#f2f2f2",
            "width": this.width + (2 * this.btnWidth) + 'px',
            "overflow": "hidden",
            "margin": "0 auto"
        })
        $cells.find('img').css({
            "width": this.width + 'px'
        })
        var imgWidth = $cells.find('img').css("height")
        // btn
        $('<a class="btn btn-pre" href="">&lt;' + '</a>').appendTo($wrapView)
        $('<a class="btn btn-next" href="">&gt;' + '</a>').appendTo($wrapView)
        $wrapView.find('.btn').css({
            "text-decoration": "none",
            "background": "rgba(16, 254, 27, 0.5)",
            "display": "block",
            "height": imgWidth,
            "width": this.btnWidth +  "px",
            "text-align": "center",
            "line-height": imgWidth,
            "position": "absolute",
            "top": "0px",
            "bottom": "0px",
            "color": "white",
            "font-size": "40px"
        })

        $wrapView.find('.btn-pre').css('left', '0px')
        $wrapView.find('.btn-next').css('right', '0px')
        // cell
        $cells.css({
            "float": " left",
            "width": this.width + "px",
            "text-align": "center",
            "display": "block"
        })
        // bottomDiv(indicator)
        var bottomDivHtml = '<div class="bottomDiv"></div>'
        var indicatorHtml = '<div class="indicator clearFix"></div>'
        var indicatorCellHtml = '<div class="indicatorCell"></div>'
        $wrapView.append(bottomDivHtml)
        var $bottomDiv = $('.bottomDiv')
        $bottomDiv.append(indicatorHtml)
        var $indicator = $('.indicator').css({
            "display": "flex",
            "justify-content": "center"
        })

        // console.log(' totol: ' + $cells.length)
        for (var i = 0; i < $cells.length; i++) {
            $indicator.append(indicatorCellHtml)
        }
        $bottomDiv.css({
            "position": "absolute",
            "bottom": "0px",
            "left": "0px",
            "right": "0px"
        })
        $indicatorCell = $('.indicatorCell').css({
            "border-radius": "5px",
            "float": "left",
            "width": "30px",
            "height": "10px",
            "margin": "5px 5px",
            "background" : "#9a9a9a"
        })

        var $out = $wrapView.find('.out-SliderBanner')
        $out.prepend($cells.last().clone())
        $out.append($cells.first().clone())
        var totalCount = $wrapView.find('.out-SliderBanner').children().length
        $out.css({
            "position": "relative",
            "left": (0 - this.width + this.btnWidth) + 'px',
            "width": this.width * totalCount,
        })
        $indicatorCell.eq(0).addClass('selected').css("background", "red")
    }
    _SliderBanner.prototype.play = function (mgl) {
        var _this = this
        // console.log('>>> ' + mgl)
        var n = mgl || 0
        if (_this.timer_auto) {
            window.clearInterval(_this.timer_auto)
        }
        var $out = this.$target.find('.out-SliderBanner')
        var $cells = $out.find('a').addClass('.cell-SliderBanner')
        // console.log('--> ' + $cells.length)
        var width = this.width
        $out.stop(true, true).animate({
            'margin-left': (-1) * n * width + 'px',
        }, 'slow', function () {
            _this.indexPage = n
            if (n == ($cells.length - 2)) {
                _this.indexPage = 0
            }
            if (n == -1) {
                _this.indexPage = $cells.length - 2 - 1
            }
            $out.css({
                'margin-left': (-1) * _this.indexPage * width + 'px',
            })
            _this.autoPlay()
            // console.log('down: indexPage= ' + _this.indexPage)
            var indicatorCells = $out.closest('.wrapView-SliderBanner').find('.indicator .indicatorCell')
            indicatorCells.eq(_this.indexPage).addClass('selected').css("background", "red").siblings('.selected').css("background", "#9a9a9a").removeClass('selected')
        })
    }
    _SliderBanner.prototype.autoPlay = function () {
        var _this = this
        if (this.auto === true) {
            _this.timer_auto = setInterval(function () {
                _this.play(++_this.indexPage)
            }, 2000)
        }
    }
    _SliderBanner.prototype.bind = function () {
        var _this = this
        var $out = this.$target.find('.out-SliderBanner')
        this.$target.find('.btn-pre').on('click', function (e) {
            e.preventDefault()
            _this.play(--_this.indexPage)
        })
        this.$target.find('.btn-next').on('click', function (e) {
            e.preventDefault()
            _this.play(++_this.indexPage)
        })

        $out.closest('.wrapView-SliderBanner').find('.indicator').on('click', '.indicatorCell', function (e) {
            _this.play($(e.currentTarget).index())
            $(e.currentTarget).addClass('selected').css("background", "red").siblings('.selected').css("background", "#9a9a9a").removeClass('selected')
        })

        this.$target.find('.out-SliderBanner').on('mouseenter', '.cell-SliderBanner', function (e) {
            window.clearInterval(_this.timer_auto)
        }).on('mouseleave', '.cell-SliderBanner', function (e) {
            _this.autoPlay()
        })
    }

    return function($target, width, isAuto, callback) {
            var width = width | $target.width()
            new _SliderBanner($target, width, isAuto, callback)
    }
})()