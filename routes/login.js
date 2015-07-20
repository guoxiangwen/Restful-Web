var express = require('express');
var router = express.Router();
var error = require('./../util/error');
/* get login page. */
router.get('/', function (req, res, next) {
    res.render('login');
});
/* post login.*/
router.post('/', function (req, res) {
    console.info("用户名:" + req.body.name + "密码:" + req.body.pwd);
    if (req.body.name == "123" && req.body.pwd == "123") {
        req.session.user = req.body;
        res.status(200).json({msg: '登录成功', user: req.body});
    }
    else {
        res.status(401).json(error.Unauthorized);
    }
});

module.exports = router;
