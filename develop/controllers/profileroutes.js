const router = require('express').Router();
const { Profile } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const profileData = await Profile.findAll({
        where: {
            name: req.params.name
            //maybe id:req.params.id or .user_id
        }
      });
      const profileInfo = profileData.map((info) => info.get({plain:true}))
      console.log(profileInfo, 'THIS WORKS HOPEFULLY')
      res.render('ProfilePage', {profileInfo});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  module.exports = router;
