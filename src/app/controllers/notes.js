const mongoose = require('mongoose');

const notes = require('../models/note');

let note = {};
// Adds note to the db

note.create = (req,res) => {
    const me  = new notes({
        title: req.body.title,
        description: req.body.description
    })
    me.save().then(() => {
        console.log("saved");
        res.status(201).send("saved")
    }).catch((e) => {
        console.log("error occured");
        res.status(500).send(e)
    })

}
// Deletes note
note.delete = (req,res) => {
    notes.findOneAndDelete({title: req.body.title}, (err,docs) => {
        if(!docs)
        {
                console.log("cannot delete")
                res.status(404).send("Error occured", err)
        }
        else
        {
            console.log("deleted successfully")
            res.status(200).send("deleted successfully")
        }
    })
}
// Updates note
note.update = (req,res) => {
    notes.findOneAndUpdate({title: req.body.oldTitle}, {description: req.body.newDescription, title: req.body.newTitle}
, (err) => {
    if(err)
    {
        console.log("error occured while updating");
        res.status(400).send("error occured while ")
    }
    else {
        console.log("Updated successfully")
        res.status(201).send("updated successfully")
    }
})}

//Retrieve all the notes
note.get = (req,res) => {
    notes.find({}, (err,docs) => {
        if(err)
        {
            console.log("error occured while retriving data")
            res.status(500).send(err)
        }
        else {
            console.log("sent all the notes successfully")
            res.status(200).send(docs)
        }
    })
}

// Exports note object
module.exports = note
