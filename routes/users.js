const express = require('express');
const User= require('../models/User');
const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

usersRouter.post('/add', (req, res) => {
    User.create(req.body).then(() => {
        res.status(200).end();
    });
});

usersRouter.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(200).end();
    });
});

usersRouter.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).end();
    });
});


module.exports = usersRouter;
