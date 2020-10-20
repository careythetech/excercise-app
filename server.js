const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// if (process.env.NODE_ENV === 'production') {
//     // Exprees will serve up production assets
//     app.use(express.static('client/build'));
//     // Express serve up index.html file if it doesn't recognize route
//     const path = require('path');
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex:true} 
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('MongoDB Connected');
    })


const router = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/api/exercises/', router);
app.use('/api/users/', usersRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
