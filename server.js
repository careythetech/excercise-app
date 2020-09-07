const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config;
const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(`${__dirname}/client/build`));

// app.get('/*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
// });

const uri = process.env.ATLAS_URI || "mongodb://localhost/mern_excercise";
mongoose.connect(uri, { useNewUrlParser: true}, { useUnifiedTopology: true })
.then(() => {
    console.log("connected to mongo at: " + uri);
});

const router = require('./routes/exercises');
// const usersRouter = require('./routes/users');

app.use('/api/exercises', router);
// app.use('./users', usersRouter);

const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
