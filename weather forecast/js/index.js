


var Container={
	init:function(){
		this.$container=$('.container')
		this.$message=this.$container.find('.message')
		this.$adress=this.$message.find('.adress')
		this.$timenow=this.$message.find('.timenow')
		this.$weather=this.$container.find('.weather')
		// this.$day=this.$weather.find('.day')
		// this.$date=this.$weather.find('.date')
		this.$code=this.$weather.find('.code')
		// this.$lowhigh=this.$weather.find('.lowhigh')
		// this.$text=this.$weather.find('.text')
		// this.$wind=this.$weather.find('.wind')
		this.render()
	},
	// 获取天气信息
	render:function(){
		var _this=this
		$.get("https://weixin.jirengu.com/weather").done(function(ret){
			console.log(ret)
			_this.renderMessage(ret.weather)
			_this.renderFuture(ret.weather)
		}).fail(function(){
			console.log(error)
		})
	},
	//在页面渲染地址时间信息
	renderMessage:function(weather){
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


}



Container.init()



