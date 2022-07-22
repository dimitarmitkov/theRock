const getThreads = require("../m_api/getOneThread");

const getOneThread = async (ctx, next) => {

    const response = await getThreads.getOne(ctx, next);

    return response.dataValues;
}

module.exports = {
    getOneThread
}
