const mongoose = require('mongoose');
const RGrantsSchema = ({
    title: { type: String, default: '', required: true},
    image:{type: String, required: true},
    name: { type: String, default: '', required: true },
    link: { type: String, default: '', required: true },
    occupation: { type: String, default: '', required: true },
    field: { type: String, default: '', required: true }
})
module.exports = mongoose.model('RGrants', RGrantsSchema);
