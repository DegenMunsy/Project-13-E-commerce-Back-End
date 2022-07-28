// import Model and DataTypes from sequelize
// used import function instead of const
import { Model, DataTypes } from 'sequelize';

// import sequelize from connection.js in the config folder
// used import funtion instead of const 
import sequelize from '../config/connection.js';

// Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

ProductTag.init(
  {
    // sets ID for product to accept intergers, force input, make id the primary key, auto increment id's for products
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // sets product_id as an integer, references the product and ID to fill the fields
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      },
    },
    // sets tag_id as an integer, references the tag and ID to fill the fields
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
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
    modelName: 'product_tag',
  }
);

// exports the ProductTag model so it can be called later
module.exports = ProductTag;
