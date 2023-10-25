const router = require('express').Router();
const { profile } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const profileData = await profile.findAll();
      res.status(200).json(profileData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // Creating a new profile
router.post('/', withAuth, async (req, res) => {
    try {
      const newProfile = await profile.create({
      
        title: req.body.title,
        content: req.body.content,
        
        user_id: req.session.user_id, 
      });
      res.status(201).json(newProfile);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  // Get a specific profile by ID
  router.get('/:email', async (req, res) => {
    try {
      const profileData = await profile.findByPk(req.params.id);
      if (!profileData) {
        res.status(404).json({ message: 'Profile not found' });
        return;
      }
      res.status(200).json(profileData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Update a profile by ID
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const updatedProfile = await profile.update(
        {
  
          title: req.body.title,
          content: req.body.content,
          
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      if (updatedprofile[0] === 0) {
        res.status(404).json({ message: 'profile not found' });
        return;
      }
      res.status(200).json({ message: 'profile updated successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Delete a profile by email
  router.delete('/:email', withAuth, async (req, res) => {
    try {
      const deletedProfile = await profile.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!deletedProfile) {
        res.status(404).json({ message: 'Profile not found' });
        return;
      }
      res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
