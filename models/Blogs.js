const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
    name: {type: String , default: '', require: true},
    image: {type: String , default: '', require: true},
    date: {type: String , default: '', require: true},
    link: {type: String , default: '', require: true}
})
module.exports = mongoose.model('Blogs', BlogSchema)
