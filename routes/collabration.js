const express = require('express');
const router = express.Router();
// const MEvents = require('../models/MEvents');
const Collab = require('../models/Collabrations');
router.get('/', (req, res) => {
    Collab.find()
     .then(events => res.json(events))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
   const { name, image1, image2, image3, image4 } = req.body;
   const newEvent = new Collab({ name, type, image1, image2, image3, image4 });

   newEvent.save()
     .then(() => res.json('added'))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
   const { name, image1, image2, image3, image4 } = req.body;

   Collab.findByIdAndUpdate(req.params.id, { name, image1, image2, image3, image4 }, { new: true })
       .then(updatedEvent => {
           if (updatedEvent) {
               res.json(updatedEvent);
           } else {
               res.status(404).json({ error: ' not found' });
           }
       })
       .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
   console.log(req.params.id)
   Collab.findByIdAndDelete(req.params.id)
       .then(() => res.json('Media event deleted'))
       .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
