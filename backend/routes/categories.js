const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      stack: e.stack,
    });
  }
});

module.exports = router;
