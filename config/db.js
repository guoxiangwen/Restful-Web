/**
 * Created by guoxw on 2015/4/23.
 */
var mongoose = require('mongoose');
var db_url = 'mongodb://localhost:27017/RestFul-Web';
mongoose.connect(db_url);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (cb) {
    console.log('success connect mongodb');
});
//exports.db = db;
