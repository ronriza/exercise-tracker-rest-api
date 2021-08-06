import * as exercises from './exercise_model.mjs'
import express from 'express';
import methodOverride from 'method-override'

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(methodOverride('_method'))

app.post('/exercises', async(req, res) => {
    exercises.createExercise(req.body)
        .then(exercise=> {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
})

app.get('/exercises', (req, res) => {
    exercises.findExercises({})
        .then(exercises=> {
            res.status(200).json(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

app.put('/exercises/:_id', (req, res) => {
    exercises.replaceExercise(req.params, req.body)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});

app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});