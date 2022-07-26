const getThreads = require("../serviceFactory/getAllThreads");

const getAllThreads = async (ctx, next) => {

    const response = await getThreads.getAll(ctx, next);

    const dataArray = response.map(data => {
        return data.dataValues;
    });
    return dataArray;
}

module.exports = {
    getAllThreads
}
