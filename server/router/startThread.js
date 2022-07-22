const starThread = require("../m_api/startThread");

const createOneThread = async (ctx, next) => {

    console.log("123",ctx.request.body)

    const response = await starThread.createOne(ctx, next);

    // return response.dataValues;
}

module.exports = {
    createOneThread
}
