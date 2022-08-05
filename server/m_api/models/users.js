const sql = require ("../sequelize")

let firstName = '';
let deletedAt = '';

const model = sql.sequelize.define('users', { firstName, deletedAt }, { tableName: "Users" });
const attributesArray = ['id', 'userName', 'deletedAt'];

module.exports = {model, attributesArray};
