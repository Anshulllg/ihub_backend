const mongoose = require('mongoose');
const CareerSchema = mongoose.Schema({
    name: {type: String , default: '', require: true},
    location: {type: String , default: '', require: true},
    description: {type: String , default: '', require: true},
    deadline: { type: Date, default: Date.now },
    link: {type: String , default: '', require: true},
    Aclink: {type: String , default: '', require: true},
})
module.exports = mongoose.model('Careers', CareerSchema)
