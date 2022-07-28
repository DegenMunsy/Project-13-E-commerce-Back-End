// import Model and DataTypes from sequelize
// used import function instead of const
import { Model, DataTypes } from 'sequelize';

// import sequelize from connection.js in the config folder
// used import funtion instead of const 
import sequelize from '../config/connection.js';

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

Category.init(
  // sets ID for product to accept intergers, force input, make id the primary key, auto increment id's
  {
    id: {
      type: DataTypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }
  },
  // sets name for product to accept string, force input
  {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  // sets SQL to turn timestamps off, freezeTableName so SQL will search for singular table names, underscored to set field to snake_case, sets model name to product
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Exports Category model so it can be called later
module.exports = Category;
