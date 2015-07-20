/**
 * Created by guoxw on 2015/4/23.
 */
var mongoose = require('mongoose');
var mysql = require('mysql');


var config = {
    mongodb: {
        url: 'mongodb://localhost:27017/RestFul-Web'
    },
    mysql: {
        option: {
            host: 'localhost',
            user: 'root',
            password: ''
        }
    }
};
/************************************mongodb********************************/
mongoose.connect(config.mongodb.url);
mongoose.connection.on('error', console.error.bind(console, '链接错误:'));
mongoose.connection.once('open', function (cb) {
    console.log('MongoDB 连接成功');
});
/************************************mysql********************************/
/*var connection = mysql.createConnection(config.mysql.option);
 connection.connect(function (err) {
 if (err) {
 console.error('mysql error connecting: ' + err.stack);
 return;
 }
 console.log('mysql数据库连接成功 connected as id ' + connection.threadId);
 });*/
