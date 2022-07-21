const {Sequelize, where} = require('sequelize');
const cs = require("../api/connection/connectionData");


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

module.exports ={sequelize}
