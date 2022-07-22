const sql = require("./index")

let threadName = '';
let threadTitle = '';
let threadContent = '';
let threadRating = '';
let threadUser = '';
let threadPostedAt = '';
let deletedAt = '';

const attributesArray = ['id', 'threadName', 'threadTitle', 'threadContent', 'threadRating', 'threadUser', 'threadPostedAt', 'deletedAt'];

async function getOne(req, next) {

    const {id} = req.request.body;

    model = sql.sequelize.define('threads',
        {threadName, threadTitle, threadContent, threadRating, threadUser, threadPostedAt, deletedAt},
        {tableName: "Threads"});

    return await model.findOne({
        attributes: attributesArray,
        where: {
            id: id
        }
    });
}

module.exports = {
    getOne
}
