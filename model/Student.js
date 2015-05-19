/**
 * Created by guoxw on 2015/4/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Define Student schema
var StudentSchema = new Schema({
    name: {type: String, default: ''},               //名字
    password: {type: String, default: ''},           //密码
    age: {type: Number, default: 18},        //年纪
    birth: {type: Date, default: Date.now},//生日
    avatar: {type: String, default: "http://qlogo2.store.qq.com/qzone/297236521/297236521/100?1270731007"}//头像

});

var StudentModel= mongoose.model('Student', StudentSchema);
/* var StudentEntity1 = new StudentModel({name: "张三", email: "zhangsan@.com", password: "zhangsan", "age": 23,"birth":new Date(),"avatar":"www.baidu.com"});
 var StudentEntity2 = new StudentModel({name: "李四", email: "lisi@.com", password: "lisi","age": 23,"birth":new Date(),"avatar":"www.baidu.com"});
 var StudentEntity3 = new StudentModel({name: "王五", email: "wangwu@.com", password: "wangwu","age": 23,"birth":new Date(),"avatar":"www.baidu.com"});
 StudentEntity1.save();
 StudentEntity2.save();
 StudentEntity3.save();*/

/*查询所有Student*/
/*exports.findAll = function (cb) {
 StudentModel.find(function (err, docs) {
 cb(err, docs);
 });
 };
 /!*根据id查询Student*!/
 exports.findById = function (obj_id, cb) {
 StudentModel.findById(obj_id, function (err, docs) {
 //console.log(docs);
 cb(err, docs);
 });
 };
 /!*根据name查询Student*!/
 exports.findByName = function (name, cb) {
 StudentModel.find({name: name}, function (err, doc) {
 cb(err, doc);
 })
 };
 /!*根据id删除Student*!/
 exports.deleteById = function (_id, cb) {
 StudentModel.find({_id: _id}, function (err, doc) {
 StudentModel.remove({_id: _id}, function (err, doc) {
 cb(err, doc);
 })
 });
 };*/
module.exports = StudentModel;

