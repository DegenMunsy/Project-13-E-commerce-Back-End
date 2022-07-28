// set router to require express and .Router to create modular, mountable route handlers
const router = require('express').Router();

// import routes from the rest of the folder
import categoryRoutes from './category-routes';
import productRoutes from './product-routes';
import tagRoutes from './tag-routes';

// mounts middleware for the routes served by the specific router
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// exports router model to be used in other files
module.exports = router;
