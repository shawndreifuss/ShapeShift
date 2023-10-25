const router = require('express').Router();
const { Post } = require('../../models');
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
module.exports = router;


