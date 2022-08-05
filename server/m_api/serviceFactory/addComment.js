const {model, attributesArray} = require("../models/comments");

async function createComment(req, next) {

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
        .then(result => {
        })
        .catch(error => console.log(error));
}

module.exports = {
    createComment
}
