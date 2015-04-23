var express = require('express');
var router = express.Router();
var StudentModel=require('./../../model/model');


/* GET students list. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    StudentModel
});
/*add student*/
router.post('/', function (req, res) {

});
module.exports = router;

