const getThreads = require("../m_api/getAllThreads");

const getAllThreads = async (ctx, next) => {

    const response = await getThreads.getAll(ctx.req, ctx.res, next);

    const dataArray = response.map(data => {
        return data.dataValues;
    });
    return dataArray;
}

module.exports = {
    getAllThreads
}
