const router = require('express').Router();

 const userRoutes = require('./userRoutes');
 const blogRoutes = require('./blogRoutes')
 const postRoutes = require('./postRoute')
 const workoutRoutes = require('./workoutRoutes')
 const profileRoutes = require('./profileroutes')

 router.use('/users', userRoutes);
 router.use('/blogs', blogRoutes);
 router.use('/post', postRoutes);
 router.use('/workouts', workoutRoutes)
 router.use('/profile', profileRoutes)

 
module.exports = router
