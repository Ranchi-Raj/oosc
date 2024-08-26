const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    email :{
        type : String,
   
    },
    address :{
        type : String,

    },
    phone :{
        type : String,
    },
    fatherName :{
        type : String,
    },
    dob :{
        type : Date,
       
    },
    gender :{
        type : String,
    },
    access :{
        type : Object,
        default : {}
    }
})

const Model = mongoose.model("Users",userSchema)

module.exports = Model