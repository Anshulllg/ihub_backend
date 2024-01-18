const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');
router.get('/', (req, res) => {
    Newsletter.find()
      .then(newsletters => res.json(newsletters))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.post('/add', (req, res) => {
    const { name, link,image, month } = req.body;
    const newNewsletter = new Newsletter({ name, link,image, month });

    newNewsletter.save()
      .then(() => res.json('Newsletter added'))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.put('/:id', (req, res) => {
    const { name, link } = req.body;

    Newsletter.findByIdAndUpdate(req.params.id, { name, link,image, month }, { new: true })
        .then(updatedNewsletter => {
            if (updatedNewsletter) {
                res.json(updatedNewsletter);
            } else {
                res.status(404).json({ error: 'Newsletter not found' });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
router.delete('/delete/:id', (req, res) => {
    Newsletter.findByIdAndDelete(req.params.id)
        .then(() => res.json('Newsletter deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
