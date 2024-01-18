const express = require('express');
const router = express.Router();
const Tendor = require('../models/Tendors');

router.get('/', (req, res) => {
   Tendor.find()
     .then(tendors => res.json(tendors))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const { name, link, date, doc_link, ted_doc_link } = req.body;
  const newTendor = new Tendor({ name, link, date, doc_link, ted_doc_link });

  newTendor.save()
    .then(() => res.json('Tendor added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
  const { name, link, date, doc_link, ted_doc_link } = req.body;

  Tendor.findByIdAndUpdate(req.params.id, { name, link, date, doc_link, ted_doc_link }, { new: true })
      .then(updatedTendor => {
          if (updatedTendor) {
              res.json(updatedTendor);
          } else {
              res.status(404).json({ error: 'Tendor not found' });
          }
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
   Tendor.findByIdAndDelete(req.params.id)
       .then(() => res.json('Tendor deleted'))
       .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
