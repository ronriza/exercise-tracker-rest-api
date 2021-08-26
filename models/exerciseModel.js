const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/exercises_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.set("useCreateIndex", true);

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


