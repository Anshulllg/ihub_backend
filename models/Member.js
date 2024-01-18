const mongoose = require('mongoose');
const MemberSchema = new mongoose.Schema({
    name: { type: String, default: '', required: true },
    team: {type : [String], default: '', required: true},
    link: {type : String, default: '', required: true},
    image:{type: String, required: true},
    mail:{type : String, default: '', required: true},
    position:{type : String, default: '', required: true}
})

module.exports = mongoose.model('Member', MemberSchema);

