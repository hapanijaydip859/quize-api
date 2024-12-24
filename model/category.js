const mongoose = require('mongoose');
let Schema = mongoose.Schema

let Categrory = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desciption: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "question"
    }
}
    // { name: 'Game', description: 'Gaming category' },
    // { name: 'Social', description: 'Social media category' },
    // { name: 'GK', description: 'General Knowledge category' }
)

let CATE = mongoose.model('category', Categrory)
module.exports = CATE
