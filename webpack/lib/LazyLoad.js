var $ = require('./jQuery2.1.js')

module.exports = (function() {
    var _Explode = function ($target, callback) {
        this.$target = $target
        this.callback = callback
        this.check()
        this.bind()
    }
    _Explode.prototype.bind = function () {
        var _this = this
        var clock // 模拟网络延伸
        $(window).on('scroll', function (e) {
            // if (clock) {
            //     clearTimeout(clock)
            // }
            // clock = setTimeout(function () {
                _this.check()
            // }, 100)
        })
    }
    _Explode.prototype.isVisible = function () {
        var height_win = window.innerHeight
        var scrolled = $(window).scrollTop()
        var height = this.$target.height()
        var offTop = this.$target.offset().top
            console.log(height_win)

        if (height_win + scrolled >= offTop && offTop + height > scrolled) {
            return true
        } else {
            return false
        }
    }
    _Explode.prototype.check = function () {
        if (this.isVisible(this.$target)) {
            this.callback(this.$target)
        }
    }

    return function (targets, callback) {
            $(targets).each(function (idx, target) {
                new _Explode($(target), callback)
            })
    }
})()