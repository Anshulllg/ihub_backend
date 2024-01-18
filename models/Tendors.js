const mongoose = require('mongoose');
const TendorSchema = mongoose.Schema({
    name: { type: String, default: '', required: true },
    link: { type: String, default: '', required: true },
    date: { type: Date, default: Date.now, required: true },
    doc_link: { type: String, default: '', required: true },
    ted_doc_link: { type: String, default: '', required: true },
})
module.exports = mongoose.model('Tendor', TendorSchema)
