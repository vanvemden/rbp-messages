const express = require('express');
const Post = require('../models/Post');

const router = new express.Router();

router.get('/', async function getAllPosts(req, res, next) {
  try {
    const posts = await Post.getAll();
    return res.json({ posts });
  } catch (err) {
    return next(err);
  }
});

router.post('/', async function createPost(req, res, next) {
  try {
    const post = await Post.create(req.body);
    return res.status(201).json({ post });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
