const sql = require("../sequelize");

let threadId = '';
let userId = '';
let threadComment = '';
let deletedAt = '';

const model = sql.sequelize.define('threadComments',
    {threadId, userId, threadComment, deletedAt},
    {tableName: "ThreadComments"});

const attributesArray = ['id', 'threadId', 'userId', 'threadComment', 'deletedAt'];

module.exports = {model, attributesArray};
