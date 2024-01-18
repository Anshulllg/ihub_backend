const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    image: {type: String, default: '', required: true},
    
})
module.exports = mongoose.model('Home', HomeSchema)