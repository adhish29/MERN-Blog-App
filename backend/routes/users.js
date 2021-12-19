const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/Post");

router.put("/:id", async (req, res) => {
  let { password, confirmPassword } = req.body;
  const { id } = req.params;
  try {
    let user = await User.findById(id);
    if (!user) throw new Error("user doesn't exist");
    if (password && password !== confirmPassword)
      throw new Error("password didn't match");
    if (password && password === confirmPassword) {
      const salt = await bcrypt.genSalt();
      req.body.password = await bcrypt.hash(password, salt);

      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findById(id);
    if (!user) throw new Error("user doesn't exist");

    try {
      await Post.deleteMany({ username: user.username });
      await User.findByIdAndDelete(id);
      res.status(200).json("user has been deleted");
    } catch (e) {
      res.status(500).json({
        message: e.message,
        stack: e.stack,
      });
    }
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findById(id);
    if (!user) throw new Error("User doesn't exist");
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

module.exports = router;
