const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        
    },
    role:{
        type:String,
        enum:["manager", "employee","admin"],
        default:"employee"
    },
    active:{
        type:Boolean,
        default:true
    }
})
module.exports = mongoose.model('User', userSchema)