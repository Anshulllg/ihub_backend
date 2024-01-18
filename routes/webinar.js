const express = require('express');
const router = express.Router();
const Webinar = require('../models/Webinar');

router.get('/', (req, res) => {
    console.log("heelo")
    Webinar.find()
      .then(webinars => res.json(webinars))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
    const { name, occupation, title, link, date, image } = req.body;
    const newWebinar = new Webinar({ name, occupation, title, link, date, image });

    newWebinar.save()
      .then(() => res.json('Webinar added'))
      .catch(err => res.status(400).json('Error: ' + err));
});


router.put('/:id', (req, res) => {
    const { name, occupation, title, link, date } = req.body;

    Webinar.findByIdAndUpdate(req.params.id, { name, occupation, title, link, date }, { new: true })
        .then(updatedWebinar => {
            if (updatedWebinar) {
                res.json(updatedWebinar);
            } else {
                res.status(404).json({ error: 'Webinar not found' });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
    Webinar.findByIdAndDelete(req.params.id)
        .then(() => res.json('Webinar deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
