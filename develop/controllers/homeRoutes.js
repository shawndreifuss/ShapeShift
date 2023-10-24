const router = require('express').Router();
const { Blog, Workout, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/',  async (req, res) => {
    try {
        const workoutData = await Workout.findAll()
        const blogData = await Blog.findAll({
            include: [
                {   model: Workout,
                    model: User,
                    attributes: ['name'],
                    include: {
                        model: Workout,
                        as: 'workouts'
                    }
                }
            ],
        });
        // Serialize data so the template can read it
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        const workouts = workoutData.map((workout) => workout.get({ plain: true}))
        res.render('homepage',{ 
            workouts,
            blogs, 
            logged_in: req.session.logged_in 
          });
        // res.json(workouts)
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/signup', (req, res) => {
    
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });


  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  module.exports = router