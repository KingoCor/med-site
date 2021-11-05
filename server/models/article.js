const {model, Schema, ObjectId} = require('mongoose')


const article = new Schema({
    name: {type: String, required: true},
    file_name: {type: String, required: true},
    tags: {type: String, required: true},
    views: {type: Number, default: 0},
    rating: {type: Number, default: 0}
})

module.exports = model('article', article)
