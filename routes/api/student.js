var express = require('express');
var router = express.Router();
var StudentModel = require('./../../model/Student');

var log = function (str) {
    return console.log(str);
};

/*
 *====================================================api====================================
 */
/* GET students list. */
router.get('/', function (req, res) {
    StudentModel.find(function (err, docs) {
        if (err) {
            return res.send(err);
        }
        res.json(docs)
    });
});
/* get student By _id*/
router.get('/:_id', function (req, res) {
    StudentModel.findById(req.params._id, function (err, doc) {
        if (err) {
           return res.send(err);
        }
        res.json(doc);
    })
});
/*delete student by _id*/
router.delete('/:_id', function (req, res) {
    console.log(req.params._id);
    StudentModel.remove({_id: req.params._id}, function (err, doc) {
        if (err) {
            return res.status(400).send(err);
        }
        res.json(doc);
    })
});
/*add student*/
router.post('/', function (req, res, next) {
    console.log("传过来的body:" + JSON.stringify(req.body));
    //var doc = req.body;
    StudentModel.create(req.body, function (err) {
        if (err) {
            return res.status(400).send(err);
        }
        res.json({msg: "created"})
    })
});
/*update student by _id*/
router.put('/:_id', function (req, res) {
    log("在body里面吗？" + req.body._id);
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
    StudentModel.update(conditions, update, options, function (err, doc) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("update ok");
            res.json(doc);
        }
    });
});

module.exports = router;

