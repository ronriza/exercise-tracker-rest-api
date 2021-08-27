const CustomError = require('../errorHandlers/CustomError.js');
const Exercise = require('../models/exerciseModel.js')
const User = require('../models/userModel.js')
const {findOrCreateUser} = require('./userController.js')


// returns all exercises of a given user
const findExercises = async (uid) => {
    const user = await findOrCreateUser(uid)
    return user.exercises
    
}

// creates a new exercise and adds it to list of user's exercises
const createExercise = async (props) => {
    const user = await findOrCreateUser(props.uid)
    // verify unit prop is either kgs or lbs
    if (props.unit !== 'kgs' && props.unit !== 'lbs') {
        throw new CustomError("Wrong unit format", 400)
    }
    // convert date string into date object
    let formattedDate = new Date(`20${props.date.slice(6)}-${props.date.slice(0,2)}-${props.date.slice(3,5)}`)
    if (formattedDate.toDateString()==='Invalid Date'){
        throw new CustomError("Wrong date format", 400)
    }
    props.date = formattedDate
    // upper case first letter of name prop
    props.name  = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    // convert weight to lbs (all weights are stored internally as lbs)
    if (props.unit === 'kgs'){
        props.weight = props.weight / 0.45359237
    }
    const exercise = new Exercise(props)
    user.exercises.push(exercise)
    await exercise.save();
    return user.save();
}

// updates existing exercise with new props
const updateExercise = async (id, props, uid) => {
    const exercise = await Exercise.findById(id)
    // verifies exercise belongs to user
    if (exercise.uid !== uid) {
        throw new CustomError("Not authorized", 403)
    }
    // verify unit prop is either kgs or lbs
    if (props.unit !== 'kgs' && props.unit !== 'lbs') {
        throw new CustomError("Wrong unit format", 400)
    }
    // convert date string into date object
    let formattedDate = new Date(`20${props.date.slice(6)}-${props.date.slice(0,2)}-${props.date.slice(3,5)}`)
    if (formattedDate.toDateString()==='Invalid Date'){

        throw new CustomError("Wrong date format", 400)
    }
    props.date = formattedDate
    // upper case first letter of name prop
    props.name  = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    // convert weight to lbs (all weights are stored internally as lbs)
    if (props.unit === 'kgs'){
        props.weight = props.weight / 0.45359237
    }
    const result = await Exercise.findByIdAndUpdate(id, props, { runValidators: true, new: true });
    return result;
}
 
// deletes an exercise and removes it from user's exercise list
const deleteById = async (id, uid) => {
    const exercise = await Exercise.findById(id)
    // verifies exercise belongs to user
    if (exercise.uid !== uid) {
        throw new CustomError("Not authorized", 403)
    }
    // removes exercise from user's exercise list
    await User.findOneAndUpdate({uid}, {$pull: {exercises: id} })
    const result = await Exercise.deleteOne({ _id: id });
    return result.deletedCount;
}

module.exports = { createExercise, findExercises, updateExercise, deleteById }