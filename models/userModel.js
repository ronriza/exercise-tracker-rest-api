const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    uid: { type: String, require: true , unique: true},
    exercises: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ]
})

module.exports = mongoose.model("User", userSchema);