
var http = require('http')
var fs = require('fs')    //启用读写文件模块
var url = require('url')
var path = require('path')  //防止不同系统路径不统一的情况

http.createServer(function(req, res){

  var pathObj = url.parse(req.url, true)  //得到一个有很多信息的请求的url对象
  console.log(pathObj)

  switch (pathObj.pathname) {
      case '/loadMore':

      var curIdx = pathObj.query.idx  //点击第一次后即curIdx=0,上面打印出来pathObj可以在命令行里面看到query参数 query: { idx: '0', len: '5' }
      var len = pathObj.query.len  //点击第一次后即len=5
      var data = []  //定义数据

      for(var i = 0; i < len; i++) {
        data.push('新闻' + (parseInt(curIdx) + i))  //点击第一次按钮后data = ["新闻0","新闻1","新闻2","新闻3","新闻4"]
      }
      res.end(JSON.stringify(data)) //把数据data变成json格式发出去
          
      break;

    default:
     fs.readFile(path.join(__dirname ,'static', pathObj.pathname), function(err, data){
         //如果pathObj.pathname不是'/loadmore',访问pathObj.pathname对应的绝对路径下的静态文件
      if(err){  //访问不到
        res.statusCode = 404
        res.end('Not found')
      }else{
        res.end(data)
      }
     })
      
  }
}).listen(8080)
