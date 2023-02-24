const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({})
    .then((categories) => {
      console.log("get all categories", categories);
      if (!categories) {
        res.status(400).send("no categories found");
        return;
      }

      res.status(200).json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category_id = req.params.id;
  
  Category.findByPk(category_id)
    .then((category) => {
      console.log("get category", category);
      if (!category) {
        res.status(404).send(`category with id ${category_id} not found`);
        return;
      }

      res.status(200).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  const category_id = req.params.id;
  Category.update(
    { category_name: req.body.category_name },
    { where: { id: category_id } }
  )
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  const category_id = req.params.id;
  Category.destroy({ where: { id: category_id } })
    .then((_) => {
      res.status(201).send(`Category ${category_id} deleted successfully`);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

module.exports = router;
