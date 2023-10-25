const router = require('express').Router();
const { Blog, Workout, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    try {
       
        const workoutData = await Workout.findAll()
        const blogData = await Blog.findAll({
            include: [
                {   model: Workout,
                    model: User,
                    attributes: ['name'],
                    order:[['date', 'DEC']],
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
            user: req.session.name,
            workouts,
            blogs, 
            loggedIn: req.session.logged_in 
          });
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

  router.get('/profilepage' , (req,res) => {
    res.render('profilepage')
  })

  router.get('/blogs', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {   model: Workout,
                    model: User,
                    attributes: ['name'],
                    order:[['date', 'DEC']],
                    include: {
                        model: Workout,
                        as: 'workouts'
                    }
                }
            ],
        });

        // Serialize data so the template can read it
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('blog', { 
            blogs, 
            loggedIn: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
  module.exports = router