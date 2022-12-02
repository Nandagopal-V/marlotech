const mongoose = require('mongoose');
const signUpTemplate=new mongoose.Schema({
     firstname:{
        type:'string',
        required: true
     },
     middlename:{
        type:'string',
     },
     lastname:{
        type:'string',
        required: true
     },
     email:{
        type:'string',
        required: true
     },
     phone:{
        type:'string',
        required: true
     },
    password:{
        type:'string',
        required: true
     },
     date:{
        type:Date,
     },
     company:{
        type:'string',
     },
     occupation:{
        type:'string',
     }
   
})

module.exports = mongoose.model('users',signUpTemplate) 