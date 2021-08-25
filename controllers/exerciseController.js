const CustomError = require('../errorHandlers/CustomError.js');
const Exercise = require('../models/exerciseModel.js')
const User = require('../models/userModel.js')

const findExercises = async (filter) => {
    const query = Exercise.find(filter)
    return query.exec();
}

const createExercise = async (props) => {
    if (props.unit !== 'kgs' && props.unit !== 'lbs') {
        throw new CustomError("Wrong unit format", 400)
    }
    let dateRegex = /^(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])\-\d{2}$/
    if (!dateRegex.test(props.date)) {
        throw new CustomError("Wrong date format", 400)
    }
    props.name  = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    const exercise = new Exercise(props)
    return exercise.save();
}


const updateExercise = async (id, props, uid) => {
    const exercise = await Exercise.findById(id)
    if (exercise.uid !== uid) {
        throw new CustomError("Not authorized", 403)
    }
    if (props.unit !== 'kgs' && props.unit !== 'lbs') {
        throw new CustomError("Wrong unit format", 400)
    }
    let dateRegex = /^(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])\-\d{2}$/
    if (!dateRegex.test(props.date)) {
        throw new CustomError("Wrong date format", 400)
    }
    props.name  = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    const result = await Exercise.findByIdAndUpdate(id, props, { runValidators: true, new: true });
    return result;
}
 
const deleteById = async (id, uid) => {
    const exercise = await Exercise.findById(id)
    if (exercise.uid !== uid) {
        throw new CustomError("Not authorized", 403)
    }
    const result = await Exercise.deleteOne({ _id: id });
    return result.deletedCount;
}

module.exports = { createExercise, findExercises, updateExercise, deleteById }