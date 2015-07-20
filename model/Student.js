/**
 * Created by guoxw on 2015/4/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Define Student schema
var StudentSchema = new Schema({
    name: {type: String, default: 'xxx'},           //名字
    password: {type: String, default: 'password'},  //密码
    age: {type: Number, default: 18},               //年纪
    birth: {type: Date, default: Date.now},         //生日
    avatar: {
        type: String,                               //头像
        default: 'http://qlogo1.store.qq.com/qzone/499753816/499753816/30'
    },
    lessons: [
        //选课记录
    ]
});

/*var StudentModel = mongoose.model('Student', StudentSchema);
var StudentEntity1 = new StudentModel({
    name: "张三",
    email: "zhangsan@.com",
    password: "zhangsan",
    "age": 23,
    "birth": new Date()
});
var StudentEntity2 = new StudentModel({
    name: "李四",
    email: "lisi@.com",
    password: "lisi",
    "age": 23,
    "birth": new Date()
});
var StudentEntity3 = new StudentModel({
    name: "王五",
    email: "wangwu@.com",
    password: "wangwu",
    "age": 23,
    "birth": new Date()
});
StudentEntity1.save();
StudentEntity2.save();
StudentEntity3.save();*/

/*查询所有Student*/
/*exports.findAll = function (cb) {od
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

