const sql = require("./index");

let threadName = '';
let threadTitle = '';
let threadContent = '';
let threadRating = '';
let threadUser = '';
let threadPostedAt = '';
let deletedAt = '';

model = sql.sequelize.define('Threads',
    {threadName, threadTitle, threadContent, threadRating, threadUser, threadPostedAt, deletedAt},
    {tableName: "Threads"});

async function createOne(req, next) {

    console.log('data body: ', req.request.body)

    const {
        threadName,
        threadTitle,
        threadContent,
        threadRating,
        threadUser,
        deletedAt
    } = req.request.body;

    console.log(threadName);



     return await model.create({
         threadName: threadName,
         threadTitle: threadTitle,
         threadContent: threadContent,
         threadRating: threadRating,
         threadUser: threadUser,
         deletedAt: deletedAt
    })
        .then(result=>{
            result.save();
        })
        .catch(error=>console.log(error));
}

module.exports = {
    createOne
}