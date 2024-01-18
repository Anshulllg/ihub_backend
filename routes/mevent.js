const express = require('express');
const router = express.Router();
const MEvents = require('../models/MEvents');

router.get('/', (req, res) => {
   MEvents.find()
     .then(events => res.json(events))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
   const { name, image1, image2, image3, image4 } = req.body;
   const newEvent = new MEvents({ name, image1, image2, image3, image4 });

   newEvent.save()
     .then(() => res.json('Media event added'))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
   const { name, image1, image2, image3, image4 } = req.body;

   MEvents.findByIdAndUpdate(req.params.id, { name, image1, image2, image3, image4 }, { new: true })
       .then(updatedEvent => {
           if (updatedEvent) {
               res.json(updatedEvent);
           } else {
               res.status(404).json({ error: 'Media event not found' });
           }
       })
       .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
   console.log(req.params.id)
   MEvents.findByIdAndDelete(req.params.id)
       .then(() => res.json('Media event deleted'))
       .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
