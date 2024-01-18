const express = require('express');
const router = express.Router();
const Career = require('../models/Careers');

router.get('/', (req, res) => {
   Career.find()
     .then(careers => res.json(careers))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
 const { name, location, description, deadline, link, Aclink } = req.body;

 if (!name || !location || !description || !link || !Aclink) {
   return res.status(400).json({ error: 'Missing required fields' });
 }

 const newCareer = new Career({ name, location, description, deadline, link, Aclink });

 newCareer.save()
   .then(() => res.json('Career added'))
   .catch(err => res.status(400).json('Error: ' + err));
})

router.put('/:id', (req, res) => {
 const { name, location, description, deadline, link, Aclink } = req.body;

 if (!name || !location || !description || !link || !Aclink) {
   return res.status(400).json({ error: 'Missing required fields' });
 }

 Career.findByIdAndUpdate(req.params.id, { name, location, description, deadline, link, Aclink }, { new: true })
     .then(updatedCareer => {
         if (updatedCareer) {
             res.json(updatedCareer);
         } else {
             res.status(404).json({ error: 'Career not found' });
         }
     })
     .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
   Career.findByIdAndDelete(req.params.id)
       .then(() => res.json('Career deleted'))
       .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
