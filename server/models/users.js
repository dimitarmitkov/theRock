'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {
        }
    }
    Users.init({
        userName: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Users',
        paranoid: true
    });
    return Users;
};
