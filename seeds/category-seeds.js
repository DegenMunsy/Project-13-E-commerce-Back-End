// import Category from ../models
import { Category } from '../models';

// create categoryData array
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// create variable to add multiple rows at once
const seedCategories = () => Category.bulkCreate(categoryData);

// export seedCategories as a model to be used in other files
module.exports = seedCategories;
