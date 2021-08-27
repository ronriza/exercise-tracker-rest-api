const User = require('../models/userModel.js')

// finds a user, or if one doesn't exists with given id, creates a new one
module.exports.findOrCreateUser = async (uid) => {
    const user = await User.findOne({uid}).populate('exercises')
    if (!user){
        const newUser = new User({uid})
        await newUser.save()
        return newUser
    } else {
        return user
    }  
}
