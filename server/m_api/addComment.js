const sql = require("./index");

let threadId = '';
let userId = '';
let threadComment = '';
let deletedAt = '';

const model = sql.sequelize.define('threadComments',
    {threadId, userId, threadComment, deletedAt},
    {tableName: "ThreadComments"});

async function createComment(req, next) {

    console.log("body", req.request.body)

    const {
        threadId,
        userId,
        threadComment,
        deletedAt
    } = req.request.body;

    return await model.create({
        threadId: threadId,
        userId: userId,
        threadComment: threadComment,
        deletedAt: deletedAt
    })
        .then(result=>{
        })
        .catch(error=>console.log(error));
}

module.exports = {
    createComment
}
