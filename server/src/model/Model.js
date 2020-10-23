const {DataTypes} = require('sequelize');
const UserModel = require('./UserModel');
const HouseModel = require('./HouseModel');
const Connection = require('../Connection');

UserModel(Connection, DataTypes);
HouseModel(Connection, DataTypes);

module.exports = Connection.models;