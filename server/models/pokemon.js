const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    hp: {
        type:String,
        required: true
    },
    attack: {
        type:String,
        required: true
    },
    stregth: {
        type:String,
        required: true
    }
});


module.exports = mongoose.model('pokemon', Schema)