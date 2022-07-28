// import Model and DataTypes from sequelize
// used import function instead of const
import { Model, DataTypes } from 'sequelize';

// import sequelize from connection.js in the config folder
// used import funtion instead of const 
import sequelize from '../config/connection.js';

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // sets ID for product to accept intergers, force input, make id the primary key, auto increment id's for products
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
   // sets name for product to accept string, force input
    product_name: {
      type: DataTypes.STRING,
      allownNull: false,
    },
    // sets price for product to accept decimals, force input, validate there is a decimal in the price
    price: {
      type: DataTypes.DECIMAL,
      allownull: false,
      validate: {
        isDecimal: true
      },
    },
    // sets stock as an interger, forces input, sets default stock to 10, validates there is a number in the input field
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      },
    },
    // sets category as an integer, forces input, references the category and ID to fill the fields
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      },
    }
  },
  // sets SQL to turn timestamps off, freezeTableName so SQL will search for singular table names, underscored to set field to snake_case, sets model name to product
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// exports the Product model
module.exports = Product;
