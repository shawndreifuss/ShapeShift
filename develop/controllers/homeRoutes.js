const router = require('express').Router();
const { Blog, Workout, User, Post, Profile } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({ limit: 20, order: [['date', 'DESC']],
          include: [
            
            { 
              model: User,
              attributes: ['name'],
            }
          ]
        })
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
        const posts = postData.map((post) => post.get({ plain: true }));
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        const workouts = workoutData.map((workout) => workout.get({ plain: true}))
       res.render('homepage',{ 
            user: req.session.name,
            posts,
            workouts,
            blogs, 
            logged_in: req.session.logged_in 
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

  router.get('/profile' , (req,res) => {
    res.render('ProfilePage')
  })

  router.get('/blogs',withAuth, async (req, res) => {
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
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/workouts', async (req, res) => {
    try {
        const workoutData = await Workout.findAll({limit: 50, order: [['updatedAt', 'DESC']],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                    order:[['date', 'DEC']],
                }
            ]
        });

        // Serialize data so the template can read it
        const workouts = workoutData.map((workout) => workout.get({ plain: true }));
        res.render('workout', { 
            workouts, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/profile', async (req, res) => {
    try {
      const profileData = await Profile.findAll();
      res.render('ProfilePage', profileData)
    } catch (err) {
      res.status(500).json(err);
    }
  });


  module.exports = router