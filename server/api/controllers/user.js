global.__basedir = __dirname;

const path = require('path');
const { Sequelize } = require('sequelize');
const cs = require("../connection/connectionData");
const serviceFactory = require("../services/serviceFactory");
const fs = require('fs');
const models = require("../../models/index")
// const getFileName = require("../functions/getFileName.js");

const sequelize = new Sequelize(cs.database, cs.user, cs.password, {
    host: cs.host,
    dialect: 'mysql'
});

try {
    sequelize.authenticate()
        .then(res => console.log('Connection has been established successfully.',
            sequelize.getDatabaseName()))
        .catch(err => console.log(err));

} catch (error) {
    console.error('Unable to connect to the database:', error);
}

let firstName = '';
let deletedAt = '';

const usersTable = serviceFactory(sequelize.define('users', { firstName, deletedAt }, { tableName: "Users" }));

module.exports.getAllUsers = function(req, res, next) {

    console.log('here in users')

    usersTable.getAll(req, res, next, ['id', 'userName', 'deletedAt']);
}



