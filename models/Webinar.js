const mongoose = require('mongoose');
const WebinarSchema = mongoose.Schema({
    name: { type: String, default: '', required: true },
    occupation: { type: String, default: '', required: true },
    title: { type: String, default: '', required: true },
    link: { type: String, default: '', required: true },
    date: { type: Date, default: Date.now, required: true },
    image: { type: String, default: '', required: true },
})
module.exports = mongoose.model('Webinar', WebinarSchema)
