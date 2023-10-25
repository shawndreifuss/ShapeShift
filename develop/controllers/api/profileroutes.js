const router = require('express').Router();
const { profile } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const profileData = await profile.findAll();
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

