

var EventCenter = {
  on: function(type, handler){
    $(document).on(type, handler)
  },
  fire: function(type, data){
    $(document).trigger(type, data)
  }
}

EventCenter.on('hello', function(e, data){
  console.log(data)
})

EventCenter.fire('hello', '你好')







var Footer = {
  init: function(){
    this.$footer = $('footer')
    this.$ul = this.$footer.find('ul')
    this.$box = this.$footer.find('.box')
    

    this.isToEnd = false
    this.isToStart = true
    this.isAnimate = false

    this.bind()
    this.render()
  },

  bind: function(){
    var _this = this
    

// 点击图片切换
    this.$footer.on('click', 'li', function(){
      $(this).addClass('active')
        .siblings().removeClass('active')

      EventCenter.fire('select-albumn', {
        channelId: $(this).attr('data-channel-id'),
        channelName: $(this).attr('data-channel-name')
      })
    })
  },
// 获得歌曲信息
  render(){
    var _this = this
    $.getJSON('https://jirenguapi.applinzi.com/fm/getChannels.php')
      .done(function(ret){
        // console.log("这是"+ret['song'][0])
        
        _this.renderFooter(ret.channels)
      }).fail(function(){
        console.log('error')
      })
  },

  renderFooter: function(channels){
    console.log(channels)
    var html = ''
    channels.forEach(function(channel){
      html += '<li data-channel-id='+channel.channel_id+' data-channel-name='+channel.name+'>'
            + '  <div class="cover"><img src='+'"'+channel.cover_small+'">'+ '</div>'
            + '  <h3>'+channel.name+'</h3>'
            +'</li>'
    })
    this.$ul.html(html)

  }


}



var Fm = {
  init: function(){
    this.$container = $('#page-music')
    this.audio = new Audio()
    this.audio.autoplay = true
    this.bind()
    // 自动播放歌曲
    this.loadMusic()
    this.audio.addEventListener('ended',function(){
    _this.loadMusic()
    })
  },
  bind: function(){
    var _this = this
    this.audio.addEventListener('ended',function(){
       _this.loadMusic()
    })
    EventCenter.on('select-albumn', function(e, channelObj){
      _this.channelId = channelObj.channelId
      _this.channelName = channelObj.channelName
      // console.log('select',channelObj)
      // 获取数据播放音乐
      _this.loadMusic()
    })
    
    this.$container.find('.btn-play').on('click', function(){
      var $btn = $(this)
      // 如果现在是播放的功能 点击之后就是暂停
      if($btn.hasClass('icon-play')){
        $btn.removeClass('icon-play').addClass('icon-pause')
        _this.audio.play();
      }else{
        // 如果是暂停 那么就是播放
        $btn.removeClass('icon-pause').addClass('icon-play')
        _this.audio.pause()
      }
    })
    // 点击下一个按钮播放歌曲
    this.$container.find('.btn-next').on('click', function(){
      _this.loadMusic()
    })
    // 点击play 播放条进度
    this.audio.addEventListener('play', function(){
      clearInterval(_this.statusClock)
      _this.statusClock = setInterval(function(){
        // 更新进度条状态
        _this.updateStatus()
      }, 800)
    })
    // 点击暂停，清除定时器
    this.audio.addEventListener('pause', function(){
      clearInterval(_this.statusClock)
      console.log('pause')
    })
    
  },
  loadMusic(callback){
    var _this = this
    console.log('loadMusic...')
    // 获得音乐
    $.getJSON('https://jirenguapi.applinzi.com/fm/getSong.php',{channel: this.channelId})
    .done(function(ret){
      console.log(ret)
      _this.song = ret['song'][0]
      console.log(_this.song)
      _this.setMusic()
      _this.loadLyric()
    })
  },
  // 获取歌词
  loadLyric(){
    var _this = this
  
    $.getJSON('https://jirenguapi.applinzi.com/fm/getLyric.php',{sid: this.song.sid}).done(function(ret){
      var lyric = ret.lyric
      // console.log(lyric)
      var lyricObj = {}
      lyric.split('\n').forEach(function(line){
        //[01:10.25][01:20.25]It a new day
        var times = line.match(/\d{2}:\d{2}/g)
        //times == ['01:10.25', '01:20.25']
        var str = line.replace(/\[.+?\]/g, '')
        if(Array.isArray(times)){
          times.forEach(function(time){
            lyricObj[time]= str
          })
        }
      })
      _this.lyricObj = lyricObj
    })    
  },
  // 设置音乐信息
  setMusic(){
    console.log('set music...')
    console.log(this.song)
    this.audio.src = this.song.url
    // 修改背景图片
    // $('.bg').css('background-image', 'url('+this.song.picture+')')
    this.$container.find('.aside figure').css('background-image', 'url('+this.song.picture+')')
    // 修改标题和歌手名字以及标签
    this.$container.find('.detail h1').text(this.song.title)
    this.$container.find('.detail .author').text(this.song.artist)
    this.$container.find('.tag').text(this.channelName)
    this.$container.find('.btn-play').removeClass('icon-play').addClass('icon-pause')
  },
  // 更新进度条状态
  updateStatus(){
    var _this=this
    // 当前播放时间除以60 取整获得当前播放分钟数
    var min = Math.floor(this.audio.currentTime/60)
    //如果播放的分钟数小于1 
    var textmin='0'+min
    
    // 获得当前的播放秒数
    var second = Math.floor(Fm.audio.currentTime%60)+''
    // 判断秒的长度是不是为2 如果是2 那么就直接加 如果不是 则需要
    second = second.length ===2?second:'0'+second
    this.$container.find('.current-time').text(textmin+':'+second)
    // 快进和倒退进度条
    this.$container.find('.area-bar').on('click',function(e){
      // 点击处占全长比例
        var percent = e.offsetX/parseInt(getComputedStyle(this).width)
        // 经计算 现在应显示时间
        _this.audio.currentTime=percent*_this.audio.duration
        console.log(_this.audio.currentTime)
        _this.$container.find('.bar-progress').css('width', percent*100+'%')

    })
    // this.audio.duration获得当前播放歌曲的持续时长
    // 当这首歌曲播放完毕之后 再加载一首歌曲继续播放
    // if(Math.abs(this.audio.duration-this.audio.currentTime<1)){
    //   this.loadMusic()
    // }

    this.$container.find('.bar-progress').css('width', this.audio.currentTime/this.audio.duration*100+'%')
 
    var line = this.lyricObj['0'+min+':'+second]
    console.log(line)
    if(line){
      this.$container.find('.lyric p').text(line)
       .boomText()
    }
  },
  // 点击红心 收藏列表
  btnHeart(){
    var _this=this
    var html=''
    this.$container.find('.icon-heart').click(function(){
      _this.$container.find('.icon-heart').css("color","red")
     var $li=$('<li data-src='+_this.song.url+'><span>'+_this.song.title+'</span><span>'+_this.song.artist+'</span></li>')
      _this.$container.find('.list').append($li)
    })
  },
  // 点击隐藏收藏区域
  btnCollectHide:function(){
    var _this=this
    this.$container.find('.collect').click(function(){
      var $ul=$(this).find('ul')
      if($ul.is(":visible")){
        $ul.hide()
      }else{
        $ul.show()
      }
    })
  }
}
 




$.fn.boomText = function(type){
  type = type || 'rollIn'
  console.log(type)
  this.html(function(){
    var arr = $(this).text()
    .split('').map(function(word){
        return '<span class="boomText">'+ word + '</span>'
    })
    return arr.join('')
  })
  
  var index = 0
  var $boomTexts = $(this).find('span')
  var clock = setInterval(function(){
    $boomTexts.eq(index).addClass('animated ' + type)
    index++
    if(index >= $boomTexts.length){
      clearInterval(clock)
    }
  }, 300)
}

Footer.init()
Fm.init()
