// const express = require('express');
// const Excercise = require('../models/Exercise');
// const usersRouter = express.Router();

// usersRouter.get('/', (req, res) => {
//     Excercise.find().then((users) => {
//         res.json(users);
//     });
// });

// usersRouter.post('/add', (req, res) => {
//     Exercise.create(req.body).then(() => {
//         res.status(200).end();
//     });
// });

// usersRouter.put('/:id', (req, res) => {
//     Exercise.findByIdAndUpdate(req.params.id, req.body).then(() => {
//         res.status(200).end();
//     });
// });

// usersRouter.delete('/:id', (req, res) => {
//     Exercise.findByIdAndDelete(req.params.id).then(() => {
//         res.status(200).end();
//     });
// });


// module.exports = usersRouter;
