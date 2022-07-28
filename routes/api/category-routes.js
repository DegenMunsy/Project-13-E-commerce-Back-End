const router = require('express').Router();
const { Category, Product } = require('../../models');
import sequelize from '../../config/connection'
const sequelize = require('../../config/connection')
// The `/api/categories` endpoint

// sources
// https://sequelize.org/docs/v6/core-concepts/model-instances/
// https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
// https://stackoverflow.com/questions/71622543/router-get-using-find-all-including-multiple-models
// https://stackoverflow.com/questions/71301252/when-building-a-fullstack-project-with-express-how-do-i-use-res-status200-js
// https://medium.com/@ng.eric314/node-js-setting-up-sequelized-for-herokus-jawsdb-while-using-environmental-variables-3f4a0535c0fa
// https://expressjs.com/en/guide/routing.html
// https://www.tabnine.com/code/javascript/functions/express/Router/post
// https://sebhastian.com/sequelize-bulk-create/#:~:text=Sequelize%20bulkCreate()%20returns%20NULL,t%20have%20the%20AUTO_INCREMENT%20attribute.
// https://sequelize.org/docs/v6/getting-started/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// Find all users
// const users = await Category.findAll({
  //  attributes: ['foo', 'bar']
// });  =====> returns array

// Find one user
// const user = await Category.findOne({
// where: { lastName: "Doe" }, }); =======> returns object or null

// Create new category
// Category.create({ firstName: "Jane", lastName: "Doe" });

// update a category
// const jane = await User.create({ name: "Jane" });
// jane.favoriteColor = "blue"
// await jane.update({ name: "Ada" })
// !!!The database now has "Ada" for name, but still has the default "green" for favorite color
// await jane.save()
// !!!!Now the database has "Ada" for name and "blue" for favorite color

// .post function. switch .add for .create
// router.post('/books/add', async (req, res) => {
//   try {
//    const book = await Book.add(Object.assign({ userId: req.user.id }, req.body));
//    res.json(book);
//   } catch (err) {
//    logger.error(err);
//    res.json({ error: err.message || err.toString() });
//   }
//  });

// .put funtion router.put('/:id', function(req, res, next) {
//  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//   if (err) return next(err);
//   res.json(post);
//  });

// delete a category
// const jane = await User.create({ name: "Jane" });
// console.log(jane.name); 
// await jane.destroy();

// findByPk
// const project = await Project.findByPk(123);
// if (project === null) {
//   console.log('Not found!');
// } else {
//   console.log(project instanceof Project); // true
// Its primary key is 123
// }


// use router.get to define subpath to home
router.get('/', (req, res) => {
    try {
      // use findAll and include anyhting from the Product model
      const categoryData = await Category.findAll({
        include: [{ model: Product}],
      });
      // if successful return '200' 
      res.status(200).json(categoryData);
      // if unsuccessful through db return '500'
    } catch (err) {
      res.status(500).json(err);
    }
});

// use router.get to define subpath to :id
router.get('/:id', (req, res) => {

// use findOne and include the attributes 'id, category_name', by id value, then if no category data resond 'Valid Category ID mandatory', if its a db error return '(500)'
  Category.findOne({
      attributes: [
        'id',
        'category_name'
      ],
      where: {
        id: req.params.id
      },
      include: [{
        model: Product,
        attributes: ['product_name']
      }]
    })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({
          message: 'Valid Category ID mandatory'
        });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get home path and post the newly created category
router.post('/', (req, res) => {
   // create a new category
   Category.create(req.body)
   .then((newCategory) => {
    res.json(newCategory);
   })
   .catch ((err) => {
    res.json(err);
   });
});

// get :id path and put the updated category info in
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json('updated '+ req.params.id);
});

// get the :id path and delete the category data selected by the .findOne params.
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id,
      },
    })
    await categoryData.destroy();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export the router Model to be used in other files
module.exports = router;
