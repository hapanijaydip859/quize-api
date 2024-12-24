const mongoose = require('mongoose');
let Schema = mongoose.Schema

let UserData = new Schema({
    username:{
        type : String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    }
})

let USER = mongoose.model('user', UserData)
module.exports = USER



