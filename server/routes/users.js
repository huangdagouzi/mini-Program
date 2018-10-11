var express = require('express');
var User = require('../models/user');
var mongoose = require('mongoose');
var utils = require('../utils');
var passport = require('passport');

var router = express.Router();


function handleError(err) {
    console.log(err);
    var resErr = new Error('err');
    resErr.status = 500;
    next(resErr);
}

/* 创建新用户 */


/* 用户登录 */
router.post('/login',
    passport.authenticate('local'),
    function(req, res, next) {

        utils.sendSuccessResponse(res, '登录成功', { uid: req.user._id });
    });


router.get('/logout', function(req, res, next) {
    console.log(req.session.user);
    delete req.session.user;
    return res.render('login');
})
module.exports = router;