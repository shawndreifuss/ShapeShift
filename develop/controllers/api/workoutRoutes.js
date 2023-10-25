const router = require('express').Router();
const { Blog, Post, Workout} = require('../../models');

router.post('/post', async (req, res) => {
    try {
      const newWorkout = await Workout.create({
        ...req.body,
        user_id: req.session.user_id,
      });
     
      res.status(201).json(newWorkout);
    } catch (err) {
      console.error(err)
      res.status(500).json(err);
    }
  });

module.exports = router