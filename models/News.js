const mongoose = require('mongoose');
const NewsSchema = mongoose.Schema({
    name: { type: String, default: '', required: true },
    
    link: { type: String, default: '', required: true },
    
})
module.exports = mongoose.model('News', NewsSchema)
