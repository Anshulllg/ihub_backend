const express = require('express');
const router = express.Router();
const News = require('../models/News');

router.get('/', (req, res) => {
    News.find()
      .then(newsList => res.json(newsList))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.post('/add', (req, res) => {
    const { name, link } = req.body;
    const newNews = new News({ name, link });

    newNews.save()
      .then(() => res.json('News item added'))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.put('/:id', (req, res) => {
    const { name, link } = req.body;

    News.findByIdAndUpdate(req.params.id, { name, link }, { new: true })
        .then(updatedNews => {
            if (updatedNews) {
                res.json(updatedNews);
            } else {
                res.status(404).json({ error: 'News item not found' });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
router.delete('/delete/:id', (req, res) => {
    News.findByIdAndDelete(req.params.id)
        .then(() => res.json('News item deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
