if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const exercises = require('./controllers/exerciseController.js')
const express = require('express')
const path = require('path')
const decodeIDToken = require('./authenticateToken.js');
const mongoSanitize = require('express-mongo-sanitize')
const { exerciseJoiSchema } = require('./joiSchemas.js');
const CustomError = require('./errorHandlers/CustomError.js');
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize({
    replaceWith: '_'
}))

const validateExercise = (req, res, next) => {
    const { error } = exerciseJoiSchema.validate(req.body)
    if (error) {
        next(new CustomError("Incorrect format", 400))
    } else {
        next()
    }
}



app.get('/exercises/', decodeIDToken, (req, res, next) => {
    const auth = req.currentUser;
    if (auth) {
        exercises.findExercises({ uid: auth.uid })
            .then(exercises => {
                return res.status(200).json(exercises);
            })
            .catch(error => {
                next(error)
            });
    } else {
        next(new CustomError("Not authorized", 403))
    }
});


app.post('/exercises', decodeIDToken, validateExercise, (req, res, next) => {
    const auth = req.currentUser
    if (auth) {
        req.body.uid = auth.uid
        exercises.createExercise(req.body)
            .then(exercise => {
                res.status(201).json(exercise);
            })
            .catch(error => {
                next(error)
            })
    } else {
        next(new CustomError("Not authorized", 403))
    }

})



app.put('/exercises/:_id', decodeIDToken, validateExercise, (req, res, next) => {
    const auth = req.currentUser;
    if (auth) {
        exercises.updateExercise(req.params, req.body, auth.uid)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(error => {
                next(error)
            });
    } else {
        next(new CustomError("Not authorized", 403))
    }

});

app.delete('/exercises/:_id', decodeIDToken, (req, res, next) => {
    const auth = req.currentUser
    if (auth) {
        exercises.deleteById(req.params._id, auth.uid)
            .then(deletedCount => {
                if (deletedCount === 1) {
                    res.status(204).send();
                } else {
                    throw new CustomError('Resource not found', 404)
                }
            })
            .catch(error => {
                next(error)
            });
    } else {
        next(new CustomError("Not authorized", 403))
    }

});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((err, req, res, next) => {
    console.log(err)
    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Something went wrong'
    res.status(statusCode).json({error: err.message})
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});