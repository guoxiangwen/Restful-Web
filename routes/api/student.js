var express = require('express');
var express_mongoose = require('express-mongoose');
var router = express.Router();
var StudentModel = require('./../../model/Student');


/*
 *====================================================api====================================
 */
/* GET students list. */
router.get('/', function (req, res) {
    StudentModel.find(function (err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs)
    });
});
/* get student By _id*/
router.get('/:_id', function (req, res) {
    StudentModel.findById(req.params._id, function (err, doc) {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
});
/*delete student by _id*/
router.delete('/:_id', function (req, res) {
    StudentModel.remove({_id: req.params._id}, function (err, doc) {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
});
/*add student*/
router.post('/', function (req, res) {
    console.log("传过来的body:" + JSON.stringify(req.body));
    //var doc = req.body;
    StudentModel.create(req.body, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({msg: "created"})
    })
});
/*update student by _id*/
router.put('/:_id', function (req, res) {
    var conditions = {_id: req.params._id};
    var update = {
        $set: {
            name: req.body.name,
            password: req.body.password,
            age: req.body.age,
            avatar: req.body.avatar
        }
    };
    var options = {upsert: true};
    StudentModel.update(conditions, update, options, function(err,doc){
        if(err){
            console.log(err)
        }
        else{
            console.log("update ok");
            res.json(doc);
        }
    });
});

module.exports = router;

