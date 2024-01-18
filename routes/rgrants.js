const express = require('express');
const router = express.Router();
const RGrants = require('../models/RGrants');

router.post('/add', (req, res) => {
   const { title, image, name, link, occupation, field } = req.body;
   const newRGrant = new RGrants({ title, image, name, link, occupation, field });

   newRGrant.save()
       .then(() => res.json('RGrant added'))
       .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/', (req, res) => {
   RGrants.find()
       .then(rgrants => {
           res.json(rgrants);
       })
       .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
   const { title, image, name, link, occupation, field } = req.body;

   RGrants.findByIdAndUpdate(req.params.id, { title, image, name, link, occupation, field }, { new: true })
       .then(updatedRGrant => {
           if (updatedRGrant) {
               res.json(updatedRGrant);
           } else {
               res.status(404).json({ error: 'RGrant not found' });
           }
       })
       .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
   RGrants.findByIdAndDelete(req.params.id)
       .then(() => res.json('RGrant deleted'))
       .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
