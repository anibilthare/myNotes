const express = require('express');
const app = express();
const router = express.Router();
const note = require('../controllers/notes')


// Adds note to the database
router.post('/', note.create);

// Deletes note from the database

router.delete('/', note.delete)

// updates note on database

router.put('/', note.update)

// retrieve all notes from database

router.get('/', note.get)

// Exporting all routes
module.exports = router