const addComment = require("../m_api/addComment");

const createComment = async (ctx, next) => {

    console.log("comments body: ", ctx.request.body);
    const response = await addComment.createComment(ctx, next);
}

module.exports = {
    createComment
}
