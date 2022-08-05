const sql = require("../sequelize");

let threadName = '';
let threadTitle = '';
let threadContent = '';
let threadRating = '';
let threadUser = '';
let threadPostedAt = '';
let deletedAt = '';

const model = sql.sequelize.define('Threads',
    {threadName, threadTitle, threadContent, threadRating, threadUser, threadPostedAt, deletedAt},
    {tableName: "Threads"});

const attributesArray = ['id', 'threadName', 'threadTitle', 'threadContent', 'threadRating', 'threadUser', 'threadPostedAt', 'deletedAt'];


module.exports = {model, attributesArray};
