const router = require('express').Router();

 const userRoutes = require('./userRoutes');
 const blogRoutes = require('./blogRoutes')
 const postRoutes = require('./postRoute')

 router.use('/users', userRoutes);
 router.use('/blogs', blogRoutes);
 router.use('/post', postRoutes);

module.exports = router
