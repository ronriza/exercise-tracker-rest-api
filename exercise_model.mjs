import mongoose from 'mongoose';

mongoose.connect(
    "mongodb://localhost:27017/exercises_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.set("useCreateIndex", true);

const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true},
    date: {type: String, required: true}
})

const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async(props) =>{
    const exercise = new Exercise(props)
    return exercise.save();
}

const findExercises = async(filter) => {
    const query = Exercise.find(filter)
    return query.exec();
}

const replaceExercise= async (id, props) => {
    const result = await Exercise.findByIdAndUpdate(id, props, {new: true});
    return result;
}

const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({ _id: _id });
    return result.deletedCount;
}

export {createExercise, findExercises, replaceExercise, deleteById}