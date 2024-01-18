const mongoose = require('mongoose');
const CollabSchema = new mongoose.Schema({
    name: {type: String, default: '', required: true},
    type : {type: String, default: '', required: true},
    image1:{type: String, default: '', required: true},
    image2:{type: String, default: '', required: true},
    image3:{type: String, default: '', required: true},
    image4:{type: String, default: '', required: true},
})
module.exports = mongoose.model('Collab', CollabSchema)
