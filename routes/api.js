const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const Blog = require('../models/blog');

// POST request to create a new author
router.post('/authors', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

// POST request to create a new blog
router.post('/blogs', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET request to fetch all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
