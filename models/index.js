// import models
//  changed function from const to import
import Product from './Product.js';
import Category from './Category.js';
import Tag from './Tag.js';
import ProductTag from './ProductTag.js';


// Products belongsTo Category
// belongsTo, hasMany, hasOne, belongsToMany function(x, {PARAMS})
Product.belongsTo(Category);

// Categories have many Products
// set the category to hasMany products using foreignKey
Category.hasMany(Product, {
  foreignKey: "category_id"
});


// Products belongToMany Tags (through ProductTag)
// set the category to belongsToMany using {through:}
Product.belongsToMany(Tag, {through: ProductTag});

// Tags belongToMany Products (through ProductTag)
// set the product to belongsToMany using {through:}
Product.belongsToMany(Tag, {through: ProductTag});

// export the finished variables to future pages
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
