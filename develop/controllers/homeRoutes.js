const router = require('express').Router();
const { Blog, Workout, User, Post } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth,  async (req, res) => {
    try {
        const postData = await Post.findAll()
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
        const posts = postData.map((post) => post.get({ plain: true }));
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        const workouts = workoutData.map((workout) => workout.get({ plain: true}))
       res.render('homepage',{ 
            user: req.session.name,
            posts,
            workouts,
            blogs, 
            loggedIn: req.session.logged_in 
          });
      //res.json({user, workouts, blogs})

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


router.get('/blogs', (req, res) => {
  res.render('blog')
})




  module.exports = router