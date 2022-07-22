global.__basedir = __dirname;

const path = require('path');
const {Sequelize, where} = require('sequelize');
const cs = require("../connection/connectionData");


const sequelize = new Sequelize(cs.database, cs.user, cs.password, {
    host: cs.host,
    dialect: "mysql"
});

try {
    sequelize.authenticate()
        .then(result => console.log('Connection has been established successfully.',
            sequelize.getDatabaseName()))
        .catch(err => console.log(err));

} catch (error) {
    console.log(error);
}


module.exports = function serviceFactory(model) {

    async function getAll(req, res, next, attributesArray) {

       const result = await model.findAll({
            attributes: attributesArray,
            where: {
                deletedAt: null
            },
            order: [
                ['id', 'ASC']
            ]
        });

       return result;
    }


    return {
        getAll
    };
}
