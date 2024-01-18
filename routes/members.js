const express = require('express');
const router = express.Router();
const Member = require('../models/Member')

router.get('/', (req, res) => {
 Member.find()
   .then(members => {
     res.json(members)
   })
   .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
 const { name, team, link, image, mail, position } = req.body;
 const newMember = new Member({ name, team, link, image, mail, position });

 newMember.save()
   .then(() => res.json('Member added'))
   .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
 const { name, team, link, mail, position } = req.body

 Member.findByIdAndUpdate(req.params.id, { name, link, mail, position }, { new: true })
   .then(updatedMember => {
     if (updatedMember) {
       res.json(updatedMember);
     } else {
       res.status(404).json({ error: 'Member not found' });
     }
   })
   .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
 Member.findByIdAndDelete(req.params.id)
   .then(() => res.json('Member deleted'))
   .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
