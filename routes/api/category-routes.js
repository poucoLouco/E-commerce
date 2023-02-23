const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({}).then((categories) => {
    console.log("get all categories", categories);
    if (!categories) {
      res.status(400).send("no categories found");
      return;
    }

    res.status(200).json(categories)
  }).catch((err) => {
    console.log(err);
    res.status(500).send("server error")
  })
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
