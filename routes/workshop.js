const express = require('express');
const router = express.Router();
const Workshop = require('../models/Workshop');

router.get('/', (req, res) => {
    Workshop.find()
      .then(workshops => res.json(workshops))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
    const {  title, link, date, image } = req.body;
    const newWorkshop = new Workshop({ title, link, date, image });

    newWorkshop.save()
      .then(() => res.json('Workshop added'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
    const { title, link, date } = req.body;

    Workshop.findByIdAndUpdate(req.params.id, {  title, link, date }, { new: true })
        .then(updatedWorkshop => {
            if (updatedWorkshop) {
                res.json(updatedWorkshop);
            } else {
                res.status(404).json({ error: 'Workshop not found' });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
    Workshop.findByIdAndDelete(req.params.id)
        .then(() => res.json('Workshop deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
