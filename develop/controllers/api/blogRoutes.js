const router = require('express').Router();
const { Blog, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Creating a new blog
router.post('/post', async (req, res) => {
  try {
  
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
   
    res.status(201).json(newBlog);
  } catch (err) {
    console.error(err)
    res.status(500).json(err);
  }
});


router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll();

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a specific blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    if (!blogData) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a blog by ID
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedBlog = await Blog.update(
      {

        title: req.body.title,
        content: req.body.content,
        
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (updatedBlog[0] === 0) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    res.status(200).json({ message: 'Blog updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a blog by ID
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedBlog = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedBlog) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Creating a new blog
router.post('/post', withAuth, async (req, res) => {
  try {
 
    const newPost = await Post.create({
      
      title: req.body.title,
      //image: req.body.image,
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


