// contains all API logic

const express = require("express");

const app = express();

// middleware
app.use(express.json());

// dummy database
let notes = [];

// POST API
app.post("/notes", (req, res) => {
  const { title, description } = req.body;

  const newNote = {
    id: notes.length + 1,
    title,
    description,
  };

  notes.push(newNote);

  res.status(201).json({
    message: "Note added successfully",
    notes: notes,
  });
});

// GET API

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

// PATCH API

app.patch("/notes/:id", (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const note = notes.find((n) => n.id == id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  if (title !== undefined) {
    note.title = title;
  }

  if (description !== undefined) {
    note.description = description;
  }

  res.status(200).json({
    message: "Note Updated successfully",
    updatedNotes: note,
  });
});


// DELETE API

app.delete("/notes/:id", (req, res) => {

  const id = req.params.id;

 notes = notes.filter(note => note.id != id);

  res.status(200).json({
    message: "Note Deleted successfully",
    notes: notes,
  });
});

// export app
module.exports = app;
