const mongoose = require('mongoose');
const WorkshopSchema = mongoose.Schema({
    title: {type: String , default: '', require: true},
    image: {type: String , default: '', require: true},
    date: { type: Date, default: Date.now, required: true },
    link: {type: String , default: '', require: true}
})
module.exports = mongoose.model('Workshop', WorkshopSchema)
