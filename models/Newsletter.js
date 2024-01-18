const mongoose = require('mongoose');
const NewsletterSchema = mongoose.Schema({
    name: {type: String , default: '', require: true},
    link: {type: String , default: '', require: true},
    image: {type: String , default: '', require: true},
    month: {type: String , default: '', require: true}
    
})
module.exports = mongoose.model('Newsleter', NewsletterSchema)
