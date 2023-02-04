//Mongoose is the ODM (Object Data Modeling) to interact with MonngoDB. Also, used to create schema & models (the field we want the user to have)

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please add your name']
    },
    email : {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
},
{
    timestamps: true                    //Automatically gives created & updated at field
})

module.exports = mongoose.model('User', userSchema)