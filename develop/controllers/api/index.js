const router = require('express').Router();

 const userRoutes = require('./userRoutes');
 const blogRoutes = require('./blogRoutes')
 const postRoutes = require('./postRoute')
 const workoutRoutes = require('./workoutRoutes')
 

 router.use('/users', userRoutes);
 router.use('/blogs', blogRoutes);
 router.use('/post', postRoutes);
 router.use('/workouts', workoutRoutes)
 

 
module.exports = router
