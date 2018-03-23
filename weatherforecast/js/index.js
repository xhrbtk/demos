2


var Container={
	init:function(){
		this.$container=$('.container')
		this.$inputcity=this.$container.find('.inputcity')
		this.$search=this.$container.find('.search')
		this.$message=this.$container.find('.message')
		this.$adress=this.$message.find('.adress')
		this.$timenow=this.$message.find('.timenow')
		this.$weather=this.$container.find('.weather')
		this.$code=this.$weather.find('.code')
		this.$temperature=this.$message.find('.temperature')
		this.$nowimg=this.$message.find('.nowimg')
		this.$suggestion=this.$container.find('.suggestion')
		this.render()
		this.getCity()
	},
	// 获取天气信息
	render:function(){
		var _this=this
		$.get("https://weixin.jirengu.com/weather").done(function(ret){
			console.log(ret)
			_this.renderMessage(ret.weather)
			_this.renderFuture(ret.weather)
			_this.suggestionMessage(ret.weather)
		}).fail(function(){
			console.log("error")
		})
	},
	//在页面渲染地址时间信息
	renderMessage:function(weather){
		var temperature=weather[0].now.temperature+'℃'
		var imgsrc=`https://weixin.jirengu.com/images/weather/code/${weather[0].now.code}.png`
		this.$nowimg.attr('src',imgsrc)
		this.$temperature.text(temperature)
		this.$adress.text(weather[0].city_name)
		this.$timenow.text(weather[0].future[0].date)
	},
	// 在页面渲染future信息
	renderFuture:function(weather){
		var futureMessages=weather[0].future
		var html=''
		console.log(futureMessages[0].day)
		futureMessages.forEach(function(message){

			html +='<div>'
					+'<span class="day">'+message.day+'</span>'
					+'<span class="date">'+message.date+'</span>'
					+'<img src='+'"'+`https://weixin.jirengu.com/images/weather/code/${message.code1}.png`+'"' +'class="code">'
					+'<img src='+'"'+`https://weixin.jirengu.com/images/weather/code/${message.code2}.png`+'"' +'class="code">'
					+'<span class="lowhigh">'+message.low+'~'+message.high+'℃'+'</span>'
					+'<span class="text">'+message.text+'</span>'
					+'<span class="wind">'+message.wind+'</span>'
				    +'</div>'
		    // console.log(html)
		})
		this.$weather.html(html)
	},
	// 获取输入城市信息
	getCity:function(){
		var _this=this
		var city
		this.$search.click(function(){
			city=_this.$inputcity.val()
			// 拼接链接
			var cityurl="https://weixin.jirengu.com/weather/cityid?location="+city
			$.get(cityurl).done(function(ret){
				// 获得城市id
				var id=ret.results[0].id
				var tianqiurl='https://weixin.jirengu.com/weather/now?cityid='+id
				$.get(tianqiurl).done(function(ret){
					console.log(ret)
					_this.renderMessage(ret.weather)
					_this.renderFuture(ret.weather)
					_this.suggestionMessage(ret.weather)
					_this.$inputcity.val("")
				})
			}).fail(function(){
				console.log("error")
			})
		})
	},
	// 渲染详细信息
	suggestionMessage:function(weather){
		var suggestions=weather[0].today.suggestion
		console.log(suggestions)
		var html=''
		$.each(suggestions,function(name,value){
			console.log(value.brief)
			html+= '<ul>'
				+ '<li class="sugestionimg"><img src='+'"' +`https://weixin.jirengu.com/images/weather/suggestion/${name}.png`+'"'+ '></li>'
				+ '<li class="brief">'+value.brief+'</li>'
				+ '<li class="details">'+value.details+'</li>'
				+ '</ul>'
		})
		this.$suggestion.html(html)
	}

	
}



Container.init()




