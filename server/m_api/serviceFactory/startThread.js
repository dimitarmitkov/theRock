const {model} = require("../models/threads");

async function createOne(req, next) {

    const {
        threadName,
        threadTitle,
        threadContent,
        threadRating,
        threadUser,
        deletedAt
    } = req.request.body;

    return await model.create({
        threadName: threadName,
        threadTitle: threadTitle,
        threadContent: threadContent,
        threadRating: threadRating,
        threadUser: threadUser,
        deletedAt: deletedAt
    })
        .then(result => {
        })
        .catch(error => console.log(error));
}

module.exports = {
    createOne
}
