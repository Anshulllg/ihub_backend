const mongoose = require('mongoose');
const CitationsSchema = mongoose.Schema({
    title: {type: String , default: '', require: true},
    authors: {type: [String] , default: [" "], require: true}

})
const StartupSchema = mongoose.Schema({
    title: {type: String , default: '', require: true},
    name: {type: String , default: '', require: true},
    image: {type: String , default: '', require: true},
    collaborators: {type: [String], default: ['tag1']},
    abstract : {type: String , default: '', require: true},
    area : {type: String , default: '', require: true},
    address : {type: String , default: '', require: true},
    phone : {type: String , default: '', require: true},
    email : {type: String , default: '', require: true},
    website : {type: String , default: '', require: true},
    trl : {type: String , default: '', require: true},
    citations : {type: [CitationsSchema], default: ['tag1']},
    user_image : {type: String , default: '', require: true},

})
module.exports = mongoose.model('Startup', StartupSchema)
