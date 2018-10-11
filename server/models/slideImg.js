var mongoose = require('mongoose');

var slideImgSchema = new mongoose.Schema({
    slideImg: { type: String },
    id: { type: String },
    url: { type: String }
});

var slideImgModel = mongoose.model('slideImg', slideImgSchema, 'slideImg');

module.exports = { 'Schema': slideImgSchema, 'Model': slideImgModel };