const mongoose = require('mongoose')


const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    sets: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: Date, required: true },
    uid: { type: String, require: true }
})

module.exports = mongoose.model("Exercise", exerciseSchema);


