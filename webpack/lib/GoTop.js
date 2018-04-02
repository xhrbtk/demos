var $ = require('./jQuery2.1.js')
module.exports = function() {
    var GoTop = function() {
        this.$top = $('<div></div>')
        this.init()
        this.bind()
    }
    GoTop.prototype.init = function() {
        this.$top.append($('<div></div>'))
        this.$top.css({
            "position": "fixed",
            "width": "50px",
            "height": "50px",
            "bottom": "0",
            "right": "0",
            "background": "white"
        })
        this.$top.find('div').css({
            "width": "0",
            "height": "0",
            "border-style": "solid",
            "border-width": "0 25px 50px 25px",
            "border-color": "transparent transparent #090a0a transparent"
        })
        this.$top.hide()
        $('body').append(this.$top)
    }
/*
    Using $(window).height() will not give you the viewport size it will give you the size of the entire window, which is usually the size of the entire document though the document could be even larger.

    - Solution
    To get the size of the actual viewport use window.innerHeight and window.innerWidth.

    Do not use the jQuery methods, e.g. $(window).innerHeight(), as these give the wrong numbers. They give you the window's height, not innerHeight.
*/
    GoTop.prototype.bind = function() {
        var _$this = this
        $(window).scroll(function() {
            if ( $(this).scrollTop() >= window.innerHeight ) {
                _$this.$top.show()
            } else {
                _$this.$top.hide()
            }
        })
        this.$top.on('click', function() {
            $(window).scrollTop(0)
        })
    }

    return GoTop
}