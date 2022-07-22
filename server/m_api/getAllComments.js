const sql = require("./index")

let threadId = '';
let userId = '';
let threadComment = '';
let deletedAt = '';

const attributesArray = ['id', 'threadId', 'userId', 'threadComment', 'deletedAt'];

async function getAll(req, next) {

    const {threadId} = req.request.body;

    model = sql.sequelize.define('threadComments',
        {threadId, userId, threadComment, deletedAt},
        {tableName: "ThreadComments"});

    return await model.findAll({
        attributes: attributesArray,
        where: {
            threadId: threadId
        },
        order: [
            ['id', 'ASC']
        ]
    });
}

module.exports = {
    getAll
}
