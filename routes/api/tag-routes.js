const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// get home page then find all Tag's and include its peoduct in the response
router.get('/', (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [
        { model: Product }
      ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get :id page then use findOne and include the attributes 'id, tag_name', from id, include 'id, product_name, price, stock, and category_id',
//  then if no tag data respond 'Valid Tag ID mandatory', if its a db error return '(500)'
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    attributes: [
      'id',
      'tag_name',
    ],
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        through: ProductTag,
        as: "products"
      }]
  })
  .then(tagData => {
    if(!tagData){
      res.status(400).json({ message: 'Validalid Tag ID mandatory' });
      return;
    }
    res.json(tagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
 
// get home path then post the newly created tag in json
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTag) => {
   res.json(newTag);
  })
  .catch ((err) => {
   res.json(err);
  });
});

// get :id path and put the updated tag info by id value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json('updated '+ req.params.id);
});

// get the :id path and search for the tag data using findOne by id value, then destroy the tagData
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id,
      },
    })
    await tagData.destroy();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export router as a model to use in other files
module.exports = router;
