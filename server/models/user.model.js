const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    
    f_name : {
        type: String,
        required : true,
    },

    l_name : {
        type : String,
    },

    mail : {
        type : String,
        unique : true,
    },

    password : {
        type : String,
    },

    phone : {
        type : Number,
        maxlength : 10,
        minlength : 10,
    },

    isVerified : { type : Boolean, },

})

userSchema.plugin(passportLocalMongoose);

const user = mongoose.model('user',userSchema);
module.exports = user;