const config = require("../../config/config.json");

module.exports  = {
    host: config.development.host,
    port: config.development.port,
    user: config.development.username,
    password: config.development.password,
    database: process.env.NODE_ENV !== "test" ? config.development.database : config.test.database,
    multipleStatements: config.development.multipleStatements,
    dialect: config.development.dialect
};

