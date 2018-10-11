var express = require('express');
var slideImg = require('../models/slideImg');
var mongoose = require('mongoose');
var utils = require('../utils');
var fs = require('fs');

var router = express.Router();

// mongoose.connect(config.dbConnStr);

function handleError(err) {
    console.log(err);
    var resErr = new Error('err');
    resErr.status = 500;
    next(resErr);
}

router.post('/update', function (req, res, next) {
    let conditions = { _id: req.body._id };
    let updates = { $set: { slideImg: req.body.slideImg, url: req.body.url, id: req.body.id} };
    slideImg.Model.update(conditions, updates, function (err) {
        if (err) {
            handleError(err);
        } else {
            utils.sendSuccessResponse(res, '');
        }
    });
});

router.post('/search', function (req, res, next) {
    slideImg.Model.find({}).sort({ 'id': 1 }).exec(function (err, results) {
        if (err) {
            handleError(err);
        } else {
            utils.sendSuccessResponse(res, '', { results: results });
        }
    })
});

router.post('/delete', function (req, res, next) {
    var conditions = { _id: req.body._id };
    slideImg.Model.remove(conditions, function (err, results) {
        if (err) {
            handleError(err);
        } else {
            utils.sendSuccessResponse(res, '轮播图删除成功');
        }
    });
});

router.post('/add', function (req, res, next) {
    slideImg.Model.create({
        slideImg: req.body.slideImg,
        url: req.body.url,
        id: req.body.id
    }, function (err, results) {
        if (err) {
            handleError(err);
        } else {
            utils.sendSuccessResponse(res, '');
        }
    })
})

module.exports = router;