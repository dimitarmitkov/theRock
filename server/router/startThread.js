const starThread = require("../m_api/startThread");

const createOneThread = async (ctx, next) => {

    const response = await starThread.createOne(ctx, next);
}

module.exports = {
    createOneThread
}
