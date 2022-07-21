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
        threadName: DataTypes.STRING,
        threadTitle: DataTypes.STRING,
        threadContent: DataTypes.STRING,
        threadRating: DataTypes.INTEGER,
        threadUser: DataTypes.INTEGER,
        threadPostedAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Threads',
        paranoid: true
    });
    return Threads;
};
