const express = require('express');
const router = express.Router();
const Startup = require('../models/Startup');
const RGrants = require('../models/RGrants');
router.get('/', (req, res) => {
   Startup.find()
     .then(startups => res.json(startups))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
   const { title, name, image, collaborators, abstract, area, address, phone, email, website, trl, citations,user_image } = req.body;
   const newStartup = new Startup({ title, name, image, collaborators, abstract, area, address, phone, email, website, trl, citations,user_image });

   newStartup.save()
     .then(() => res.json('added'))
     .catch(err => res.status(400).json('Error: ' + err));
});
router.get('/search', async (req, res) => {
  try {
      console.log("heelo")
      const _id = req.query.id;
     console.log(_id)

     
      const rgrant = await RGrants.findById(_id);

      
      const title = rgrant.title;
     console.log(title)

     
      const startups = await Startup.find({ title: title });

      res.json(startups);
  } catch (err) {
      res.status(400).json('Error: ' + err);
  }
});


router.put('/:id', (req, res) => {
   const { title, name, image, collaborators, abstract, area, address, phone, email, website, trl, citations } = req.body;

   Startup.findByIdAndUpdate(req.params.id, { title, name, image, collaborators, abstract, area, address, phone, email, website, trl, citations }, { new: true })
       .then(updatedStartup => {
           if (updatedStartup) {
               res.json(updatedStartup);
           } else {
               res.status(404).json({ error: 'not found' });
           }
       })
       .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/delete/:id', (req, res) => {
   Startup.findByIdAndDelete(req.params.id)
       .then(() => res.json('deleted'))
       .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
