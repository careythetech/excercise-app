const express = require('express');
const Exercise = require('../models/Exercise');
const router = express.Router();

router.get('/', (req, res) => {
    Exercise.find()
    .then((exercises) => {
        res.json(exercises);
    });
});

router.post('/add', (req, res) => {
    Exercise.create(req.body)
    .then(() => {
        res.status(200).end();
    });
});

router.put('/', (req, res) => {
    Exercise.update({username: req.body.username}, {$set: req.body})
    .then(() => {
        res.status(200).end();
    });
});

router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(200).end();
    });
});


module.exports = router;
