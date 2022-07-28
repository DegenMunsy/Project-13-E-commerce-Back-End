// require dotenv for privacy
require('dotenv').config();

// set Sequelize variable to require sequelize set below
const Sequelize = require('sequelize');

// set sequelize variable
const sequelize = process.env.JAWSDB_URL
// set a new Sequelize variable to the JAWSDB for heroku then send it to throught the .env to the local host, using mysql and decimal numbers
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

    // export sequelize as a model to be used later
module.exports = sequelize;
