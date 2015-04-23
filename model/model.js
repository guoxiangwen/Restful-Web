/**
 * Created by guoxw on 2015/4/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Define User schema
var UserSchema = new Schema({
    email: String,
    name: String,
    salt: String,
    password: String
});
/*var CurseSchema = new Schema({
 name: String,
 time: String
 });*/
// export them

var UserModel = mongoose.model('User', UserSchema);
//var CurseModel = mongoose.model('Curse', CurseSchema);

var UserEntity = new UserModel({name: "张三", email: "qq@.com", password: "123", salt: "what?"});
//var CurseEntity = new CurseModel({name: "数学", time: "9"});
//CurseEntity.save();

/*查询所有user*/
exports.findAll=function(cb){
    UserModel.find(function (err, docs) {
        //console.log(docs);
        cb(err,docs);
    });
};



/*
 UserEntity.save();
 console.log(UserEntity);*/
exports.UserModal=UserModel;
