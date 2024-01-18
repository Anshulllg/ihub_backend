const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
 name: {
   type: String,
   required: true
 },
 duration: {
   type: String,
   required: true
 },
 type:{
type:String, required: true
 },
 eligibility: {
   type: String,
   required: true
 },
 guidelines: {
   type: String,
   required: true
 },
 objective: {
   type: String,
   required: true
 },
 link: {
   type: String,
   required: true
 }
 
});
module.exports = mongoose.model('Fellow', modelSchema)
