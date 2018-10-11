var express = require('express');
var router = express.Router();


var image = require('../models/image');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.type('html');
    res.render('index');
});

router.post('/swiperImg', function(req, res, next) {
    image.Model.find({}).sort({ 'id': 1 }).exec(function (err, results) {
        if (err) {
            handleError(err);
        } else {
            utils.sendSuccessResponse(res, '', { results: results });
        }
    })
});

module.exports = router;