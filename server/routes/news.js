var express = require('express');
var news = require('../models/image');
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

router.post('/getNewsList', function (req, res, next) {

    news.Model.find({}, { title: 1, pubdate: 1, author: 1, status: 1, _id: 1 }).sort({ 'pubdate': -1 }).skip((req.body.currentPage - 1) * 10).limit(10).exec(function (err, results) {
        if (err) {
            handleError(err);
        } else {
            var total = '';
            var pageSize = results.length;
            var newList = JSON.parse(JSON.stringify(results).replace(/_id/g, "id"));
            news.Model.find({}, function (err, data) {
                if (err) {
                    handleError(err);
                } else {
                    this.total = data.length;

                    utils.sendSuccessResponse(res, '', { newList: newList, total: this.total, totalPage: Math.ceil(this.total / 10) });
                }
            });

        }
    })
});

router.post('/getNewsInfo', function (req, res, next) {
    var id = req.body._id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        news.Model.find({ _id: req.body._id }).exec(function (err, results) {
            if (err) {
                handleError(err);
            } else {
                utils.sendSuccessResponse(res, '', { results: results });
            }
        })
    } else {
        res.json({ no: 0, msg: id + '不存在' });
    }
});

router.post('/edit', function (req, res, next) {
    var id = req.body.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {

        let conditions = { _id: req.body.id };
        let updates = {
            $set: {
                title: req.body.title,
                source: req.body.source,
                author: req.body.author,
                article: (req.body.article).replace(/" "/g, "&nbsp;"),
                description: req.body.description,
                pubdate: req.body.pubdate,
                type: req.body.type,
                image: req.body.image,
            }
        };
        news.Model.update(conditions, updates, function (err) {
            if (err) {
                handleError(err);
            } else {
                utils.sendSuccessResponse(res, '');
            }
        });
    } else {
        res.json({ no: 0, msg: id + '不存在' });
    }
});

router.post('/add', function (req, res, next) {
    news.Model.create({
        title: req.body.title,
        source: req.body.source,
        author: req.body.author,
        pubdate: req.body.pubdate,
        article: (req.body.article).replace(/" "/g, "&nbsp;"),
        description: req.body.description,
        type: req.body.type,
        image: req.body.image,
        status: '1',
    }, function (err, results) {
        if (err) {
            handleError(err);
        } else {
            utils.sendSuccessResponse(res, '', results);
        }
    })
});

router.post('/delete', function (req, res, next) {
    var id = req.body.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        var conditions = { _id: req.body.id };
        news.Model.remove(conditions, function (err) {
            if (err) {
                handleError(err);
            } else {
                utils.sendSuccessResponse(res, '');
            }
        });
    } else {
        res.json({ no: 0, msg: id + '不存在' });
    }
});

router.post('/retract', function (req, res, next) {
    var id = req.body.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        let conditions = { _id: req.body.id };
        let updates = {
            $set: {
                status: '2',
            }
        };
        news.Model.update(conditions, updates, function (err) {
            if (err) {
                handleError(err);
            } else {
                utils.sendSuccessResponse(res, '');
            }
        });
    } else {
        res.json({ no: 0, msg: id + '不存在' });
    }
});

router.post('/post', function (req, res, next) {
    var id = req.body.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        let conditions = { _id: req.body.id };
        let updates = {
            $set: {
                status: '0',
            }
        };
        news.Model.update(conditions, updates, function (err) {
            if (err) {
                handleError(err);
            } else {
                utils.sendSuccessResponse(res, '');
            }
        });
    } else {
        res.json({ no: 0, msg: id + '不存在' });
    }
});

module.exports = router;