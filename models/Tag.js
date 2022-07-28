// import Model and DataTypes from sequelize
// used import function instead of const
import { Model, DataTypes } from 'sequelize';

// import sequelize from connection.js in the config folder
// used import funtion instead of const 
import sequelize from '../config/connection.js';

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
