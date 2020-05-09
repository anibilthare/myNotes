const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator')


//Schema for notes
const notesSchema = mongoose.Schema({
    title: {type: String, trim: true, unique: true, dropDups: true},
    description: {
        type: String,
        required: true,
        trim: true
    }
})

// Plugin is being used for determing the uniqueness of title
notesSchema.plugin(unique, {message:"You cannot have two notes with same title"});

// Exporting model
module.exports = notes = mongoose.model('notes', notesSchema)