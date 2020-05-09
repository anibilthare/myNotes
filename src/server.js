const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/dbConfig');
const router = require('./app/routes/notes');

const app = express();

app.use(express.json());

// Establishes connection with database
mongoose.connect(dbConfig.url, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true}).then(()=> {
    console.log("successfully connected to the database")
}).catch(() => {
    console.log("Unable to connect")
})

// Adds note to db
app.use('/add', router);
// deletes a note from db
app.use('/delete', router);
// updates a note on db
app.use('/update', router);
// Retrieves all the notes from db
app.use('/get', router)



app.listen(3000, () => {
    console.log("server is up!")
})