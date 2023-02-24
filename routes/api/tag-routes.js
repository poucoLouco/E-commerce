const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({})
    .then((tags) => {
      console.log("get all tags", tags);
      if (!categories) {
        res.status(400).send("no tags found");
        return;
      }
      res.status(200).json(tags);
      

})
      Tag.update.update(
        { tag_name: req.body.tag_name },
        { where: { id: tagId } }
      )
 .catch((err) => {
  console.log(err);
  res.status(500).send("server error");
})
});
router.get('/:id', (req, res) => {
  
  const tagId = req.params.id;
  // find a single tag by its `id`
  // be sure to include its associated Product data
  tag.findByPk(tagId)
    .then((tag) => {
      console.log("get tag", tag);
      if (!tag) {
        res.status(404).send(`category with id ${catId} not found`);
        return;
      }

      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
  });

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
  tag.update(
    { tag_name: req.body.category_name },
    { where: { id: tagId } }
  )
    .then((tag) => {
      res.status(201).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

  // update a tag's name by its `id` value

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const tagId = req.params.id;
  Tag.destroy({ where: { id: tagId } })
    .then((_) => {
      res.status(201).send(`Tag ${tagId} deleted successfully`);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("server error");
    });
});

module.exports = router;
