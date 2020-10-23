const {Sequelize} = require('sequelize');

const Connection = new Sequelize('casedb','caseuser','123456',{
    host:'localhost',
    dialect:'postgres'
});

module.exports = Connection;