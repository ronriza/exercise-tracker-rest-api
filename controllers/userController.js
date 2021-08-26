const User = require('../models/userModel.js')

module.exports.findOrCreateUser = async (uid) => {
    const user = await User.findOne({uid}).populate('exercises')
    if (!user){
        const newUser = new User({uid})
        await newUser.save()
        console.log(newUser.exercises)
        return newUser
    } else {
        return user
    }  
}
