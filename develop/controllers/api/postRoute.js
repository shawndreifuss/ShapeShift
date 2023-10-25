const router = require('express').Router();
const { Post, Workout } = require('../../models');
const withAuth = require('../../utils/auth');



// Creating a new post
router.post('/', withAuth, async (req, res) => {
  try {
 
    const newPost = await Post.create({
      
      title: req.body.title,
      image: req.body.image,
      caption: req.body.caption
     
    });
   console.log("wooo")
    res.status(200).json(newPost);
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});

router.post('/workout', withAuth, async (req, res) => {
    try {
   
      const newPost = await Workout.create({
        
        category: req.body.category,
        reps: req.body.reps,
        sets: req.body.sets,
        weight: req.body.weight,
        distance: req.body.distance,
        duration: req.body.duration,
        details: req.body.details,
        

       
      });
     console.log("wooo")
      res.status(200).json(newPost);
    } catch (err) {
      console.error(err)
      res.status(500).json(err);
    }
  });
module.exports = router;


