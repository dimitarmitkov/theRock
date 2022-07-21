'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Threads extends Model {
        static associate(models) {
        }
    }
    Threads.init({
        threadId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        threadComment: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Threads',
        paranoid: true
    });
    return Threads;
};
