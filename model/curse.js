/**
 * Created by guoxw on 2015/4/24.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurseSchema = new Schema({
    name: String,
    time: {type: Number, default: 50}
});
var CurseModel = mongoose.model('Curse', CurseSchema);

/*var CurseEntity1 = new CurseModel({name: "语文", time: 90});
var CurseEntity2 = new CurseModel({name: "数学", time: 87});
var CurseEntity3 = new CurseModel({name: "英语", time: 56});
var CurseEntity4 = new CurseModel({name: "物理", time: 23});
var CurseEntity5 = new CurseModel({name: "化学", time: 78});
var CurseEntity6 = new CurseModel({name: "生物", time: 45});
CurseEntity1.save();
CurseEntity2.save();
CurseEntity3.save();
CurseEntity4.save();
CurseEntity5.save();
CurseEntity6.save();*/
/*获取所有 curse list*/
/*exports.findAll = function (cb) {
 CurseModel.find(function (err, doc) {
 cb(err, doc);
 })
 };*/
/*根据 name 查询 curse*/
/*exports.findByName = function (name, cb) {
 CurseModel.find({name: name}, function (err, doc) {
 cb(err, doc);
 })
 };*/
module.exports = CurseModel;

