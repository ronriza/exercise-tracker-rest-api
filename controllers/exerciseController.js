const CustomError = require('../errorHandlers/CustomError.js');
const Exercise = require('../models/exerciseModel.js')
const User = require('../models/userModel.js')
const {findOrCreateUser} = require('./userController.js')


const findExercises = async (filter) => {
    const user = await findOrCreateUser(filter.uid)
    return user.exercises
    
}

const createExercise = async (props) => {
    const user = await findOrCreateUser(props.uid)
    if (props.unit !== 'kgs' && props.unit !== 'lbs') {
        throw new CustomError("Wrong unit format", 400)
    }
    let formattedDate = new Date(`20${props.date.slice(6)}-${props.date.slice(0,2)}-${props.date.slice(3,5)}`)
    if (formattedDate.toDateString()==='Invalid Date'){
        throw new CustomError("Wrong date format", 400)
    }
    props.date = formattedDate
    props.name  = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    if (props.unit === 'kgs'){
        props.weight = props.weight / 0.45359237
    }
    const exercise = new Exercise(props)
    user.exercises.push(exercise)
    await exercise.save();
    return user.save();
}

const updateExercise = async (id, props, uid) => {
    const exercise = await Exercise.findById(id)
    if (exercise.uid !== uid) {
        throw new CustomError("Not authorized", 403)
    }
    if (props.unit !== 'kgs' && props.unit !== 'lbs') {
        throw new CustomError("Wrong unit format", 400)
    }

    let formattedDate = new Date(`20${props.date.slice(6)}-${props.date.slice(0,2)}-${props.date.slice(3,5)}`)
    if (formattedDate.toDateString()==='Invalid Date'){

        throw new CustomError("Wrong date format", 400)
    }
    props.date = formattedDate
    props.name  = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    if (props.unit === 'kgs'){
        props.weight = props.weight / 0.45359237
    }
    const result = await Exercise.findByIdAndUpdate(id, props, { runValidators: true, new: true });
    return result;
}
 
const deleteById = async (id, uid) => {
    const exercise = await Exercise.findById(id)
    if (exercise.uid !== uid) {
        throw new CustomError("Not authorized", 403)
    }
    await User.findOneAndUpdate({uid}, {$pull: {exercises: id} })
    const result = await Exercise.deleteOne({ _id: id });
    return result.deletedCount;
}

module.exports = { createExercise, findExercises, updateExercise, deleteById }