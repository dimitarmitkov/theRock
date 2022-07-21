const sql = require("./index")

let threadName = '';
let threadTitle = '';
let threadContent = '';
let threadRating = '';
let threadUser = '';
let threadPostedAt = '';
let deletedAt = '';

const attributesArray = ['id', 'threadName', 'threadTitle', 'threadContent', 'threadRating', 'threadUser', 'threadPostedAt', 'deletedAt'];

async function getAll(req, res, next) {

    model = sql.sequelize.define('threads',
        {threadName, threadTitle, threadContent, threadRating, threadUser, threadPostedAt, deletedAt},
        {tableName: "Threads"});

    return await model.findAll({
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
