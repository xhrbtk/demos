// main.js 
var $ = require('./jQuery2.1.js')
var SliderBanner = require('./SliderBanner.js')
console.log('--> ' + SliderBanner)

console.log('$ is ' + $)
SliderBanner($('.banner'), false)

var GoTop = require('./GoTop.js')
new GoTop()

var WaterFlow = require('./WaterFlow.js')
$.get('/flickr').done(function (data) {
    // paseJsonData
    var resluts = data["data"]
    $.each(resluts, function (idx, infoData) {

        var imgUrl = infoData.url
        //    new WaterFlow()
        new WaterFlow($('.waterFlow'), imgUrl, 200)
    })
})

var LazyLoad = require('./LazyLoad.js')
LazyLoad($('.container img'), function ($elNode) {
    var url = $elNode.attr('data-src')
    if ($elNode.hasClass('loaded')) return
    $elNode.attr('src', url)
    $elNode.addClass('loaded')
})