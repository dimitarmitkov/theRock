const addComment = require("../serviceFactory/addComment");

const createComment = async (ctx, next) => {

    const response = await addComment.createComment(ctx, next);
}

module.exports = {
    createComment
}
