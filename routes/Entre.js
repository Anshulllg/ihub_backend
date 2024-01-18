const express = require('express');
const mongoose = require('mongoose');
const Model = require("../models/Entre")

const router = express.Router();

// Create a new item
router.post('/add', (req, res) => {
 const { name, About, duration, type, eligibility, guidelines, link, slogo_link } = req.body;
 const newModel = new Model({ name, About, duration, type, eligibility, guidelines, link,slogo_link  });
 newModel.save()
 .then(() => res.json('Model added'))
 .catch(err => res.status(400).json('Error: ' + err));
});

// Read all items
router.get('/', (req, res) => {
 Model.find()
 .then(models => {
  res.json(models);
 })
 .catch(err => res.status(400).json('Error: ' + err));
});

// Update an item
router.put('/:id', (req, res) => {
 const { name, About, duration, type, eligibility, guidelines, link,slogo_link } = req.body;
 Model.findByIdAndUpdate(req.params.id, { name, About, duration, type, eligibility, guidelines, link,slogo_link  }, { new: true })
 .then(updatedModel => {
  if (updatedModel) {
    res.json(updatedModel);
  } else {
    res.status(404).json({ error: 'Model not found' });
  }
 })
 .catch(err => res.status(400).json('Error: ' + err));
});

// Delete an item
router.delete('/delete/:id', (req, res) => {
 Model.findByIdAndDelete(req.params.id)
 .then(() => res.json('Model deleted'))
 .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
