const getThreads = require("../m_api/getAllComments");

const getAllComments = async (ctx, next) => {

    const response = await getThreads.getAll(ctx, next);

    const dataArray = response.map(data => {
        return data.dataValues;
    });
    return dataArray;
}

module.exports = {
    getAllComments
}
