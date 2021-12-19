const router = require("express").Router();
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

//create post

router.post("/", async (req, res) => {
  const post = new Post(req.body);
  try {
    const savePost = await post.save();
    res.status(200).json(savePost);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

//update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) throw new Error("please enter valid post id!!!");
    if (post.username === req.body.username) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedPost);
    } else {
      throw new Error("you can update only your post");
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

//delete post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) throw new Error("please enter valid post id!!!");
    if (post.username === req.body.username) {
      await Post.findByIdAndDelete(req.params.id);
      res.status(200).json("Post is deleted");
    } else {
      throw new Error("you can update only your post");
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

//get post

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let post = await Post.findById(id);
    if (!post) throw new Error("Post doesn't exist");
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

//get all posts
//get post

router.get("/", async (req, res) => {
  const { id } = req.params;
  const { username, category } = req.query;
  try {
    let posts;
    if (username) posts = await Post.find({ username });
    else if (category)
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    else posts = await Post.find();
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

module.exports = router;
