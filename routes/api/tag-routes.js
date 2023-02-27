const router = require("express").Router();
const { Tag } = require("../../models");

// The `/api/tags` endpoint
// find all tags
// be sure to include its associated Product data
router.get("/", (req, res) => {
  Tag.findAll({ attributes: ["id", "tag_name"] }).then((tags) => {
    console.log("get all tags", tags);
    if (!tags) {
      res.status(400).send("no tags found");
      return;
    }
    res.status(200).json(tags);
  });
  // Tag.update({ tag_name: req.body.tag_name }, { where: { id: tag_id } })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).send("server error");
  //   });
});

router.get("/:id", (req, res) => {
  const tag_id = req.params.id;
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: { id: tag_id },
  })
    .then((tag) => {
      console.log("get tag", tag);
      if (!tag) {
        res.status(404).send(`tag with id ${tag_id} not found`);
        return;
      }

      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((tag) => {
      res.status(201).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

router.put("/:id", (req, res) => {
  console.log("put tag with id", req.body, req.params);
  const { id } = req.params;
  const { tag_name } = req.body;
  Tag.update({ tag_name }, { where: { id } })
    .then((tags) => {
      res.status(201).json(tags);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

// update a tag's name by its `id` value

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  const tag_id = req.params.id;
  Tag.destroy({ where: { id: tag_id } })
    .then((_) => {
      res.status(201).send(`Tag ${tag_id} deleted successfully`);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

module.exports = router;
