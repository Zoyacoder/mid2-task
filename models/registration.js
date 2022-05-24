const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    fullname: {type:String, required:true},
    email: {type:String, required:true},
    phoneNumber: {type:String, required:true},
    counry: {type:String, required:true},
    state: {type: String, required:true},
    city: {type:String, required:true},
    address: {type:String, required:true},
    zip: {type:Number, required: true}
})

module.exports = mongoose.model('RegistrationSchema', registrationSchema);