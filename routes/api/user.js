var express = require('express');
var router = express.Router();
var UserModel = require('./../../model/model');


/* GET user list. */
router.get('/', function (req, res, next) {
    UserModel.findAll(function(err,docs){
        console.log("get:"+docs);
        res.json(docs)
    });
/*    UserModel.find(function (err, docs) {
        console.log("get:"+docs);
        res.json(docs)
    });*/
});
/*add user*/
router.post('/', function (req, res) {

});
module.exports = router;

