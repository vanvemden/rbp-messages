const express = require('express');
const PostModel = require('../models/PostModel');

const router = new express.Router();

router.get('/', async function getAllPosts(req, res, next) {
  try {
    const posts = await PostModel.getAll();
    return res.json({ posts });
  } catch (err) {
    return next(err);
  }
});

router.post('/', async function createPost(req, res, next) {
  try {
    const post = await PostModel.create(req.body.text);
    return res.status(201).json({ post });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
