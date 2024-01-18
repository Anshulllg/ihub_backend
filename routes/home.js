const express = require('express');
const router = express.Router();
const Home = require('../models/Home');

router.get('/', (req, res) => {
    console.log("hello")
    Home.find()
      .then(events => res.json(events))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.post('/add', (req, res) => {
    const { image } = req.body;
    console.log(image)
    const newHome = new Home({ image });

    newHome.save()
      .then(() => res.json('added'))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.put('/:id', (req, res) => {
    const { image } = req.body;

    Home.findByIdAndUpdate(req.params.id, { image }, { new: true })
        .then(updatedEvent => {
            if (updatedEvent) {
                res.json(updatedEvent);
            } else {
                res.status(404).json({ error: 'not found' });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
router.delete('/delete/:id', (req, res) => {
    console.log(req.params.id)
    Home.findByIdAndDelete(req.params.id)
        .then(() => res.json('deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
