var express = require('express');
var router = express.Router();
var CurseModel = require('./../../model/Curse');


/* get Curses list. */
router.get('/', function (req, res) {
    CurseModel.find(function (err, doc) {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
});
/*add Curse*/
router.post('/', function (req, res) {
    CurseModel.create(req.body, function (err, doc) {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
});
/*delete Curse*/
router.delete('/:_id', function (req, res) {
    CurseModel.remove({_id: req.params._id}, function (err, doc) {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
});
/*update Curse*/
router.put('/:_id', function (req, res) {
    var conditions = {_id: req.params._id};
    var update = {
        $set: {
            name: req.body.name
        }
    };
    var options = {upsert: true};
    CurseModel.update(conditions, update, options, function (err, doc) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("update ok");
            res.json(doc);
        }
    });
});
module.exports = router;

