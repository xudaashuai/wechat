const express = require('express'), //express 框架
    wechat = require('./wechat/wechat')
    config = require('./config');//引入配置文件
var wechatApp = new wechat(config);

var app = express();//实例express框架

//用于处理所有进入 3000 端口 get 的连接请求
app.get('/', function (req, res) {
  wechatApp.auth(req,res);
});
app.get('/getAccessToken',function(req,res){
  wechatApp.getAccessToken().then(function(data){
    res.send(data);
  });
});
//监听3000端口
app.listen(80);
