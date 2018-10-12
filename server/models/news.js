var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
    title: { type: String },
    source: { type: String },
    author: { type: String },
    pubdate: { type: String },
    article: { type: String },
    type: { type: String },
    image: { type: String },
    status: { type: String },
    description: { type: String },
});

var newsModel = mongoose.model('news', newsSchema, 'news');

module.exports = { 'Schema': newsSchema, 'Model': newsModel };