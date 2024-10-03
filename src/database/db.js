const Sequelize = require('sequelize');
const config = require('../../config/config.json');

const env = 'development';
const { username, password, database, host } = config[env];

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: 'postgres',
});

module.exports = sequelize

