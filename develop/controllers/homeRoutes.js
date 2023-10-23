const router = require('express').Router();
const { Blog, Workout, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        // Import the models
        const { Blog, User, Workout } = require('../models');

        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                    include: {
                        model: Workout,
                        as: 'workouts'
                    }
                }
            ],
        });
        res.json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router