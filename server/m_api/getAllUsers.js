const sql = require ("./index")

let firstName = '';
let deletedAt = '';

const attributesArray = ['id', 'userName', 'deletedAt'];

async function getAll(req, res, next) {

    model = sql.sequelize.define('users', { firstName, deletedAt }, { tableName: "Users" });

    return  await model.findAll({
        attributes: attributesArray,
        where: {
            deletedAt: null
        },
        order: [
            ['id', 'ASC']
        ]
    });
}

module.exports = {
    getAll
}
