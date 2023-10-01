const mongoose = require('mongoose');

const userSchema=({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        required:false
    }
})
const Users=mongoose.model("users",userSchema);
module.exports=Users;