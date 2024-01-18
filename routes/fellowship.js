const express = require('express');
const router = express.Router();
const Fellow = require('../models/Fellowship')

router.get('/', (req, res) => {
 Fellow.find()
 .then(fellows => {
  res.json(fellows);
 })
 .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
 const { name, duration, type, eligibility, guidelines, objective, link } = req.body;
 const newFellow = new Fellow({ name, duration, type, eligibility, guidelines, objective, link });
 newFellow.save()
 .then(() => res.json('Fellow added'))
 .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
 const { name, duration, type, eligibility, guidelines, objective, link } = req.body;
 Fellow.findByIdAndUpdate(req.params.id, { name, duration, type, eligibility, guidelines, objective, link }, { new: true })
 .then(updatedFellow => {
  if (updatedFellow) {
    res.json(updatedFellow);
  } else {
    res.status(404).json({ error: 'Fellow not found' });
  }
 })
 .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
 Fellow.findByIdAndDelete(req.params.id)
 .then(() => res.json('Fellow deleted'))
 .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
