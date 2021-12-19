const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    console.log(user);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

module.exports = router;
