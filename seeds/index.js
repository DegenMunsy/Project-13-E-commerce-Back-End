// Import the models from other files in the folder

import seedCategories from './category-seeds';
import seedProducts from './product-seeds';
import seedTags from './tag-seeds';
import seedProductTags from './product-tag-seeds';

// Import sequilize from connection file in config folder
import sequelize from '../config/connection';

// make calls to functions and await answers then console log the response indicated, finish the process
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

// call the seedAll function
seedAll();
