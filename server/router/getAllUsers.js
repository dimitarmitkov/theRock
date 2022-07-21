const getUsers = require("../m_api/getAllUsers");

const getAllUsers = async (ctx, next) => {

    const response = await getUsers.getAll(ctx.req, ctx.res, next);

    const dataArray = response.map(data => {
        return data.dataValues;
    });
    return dataArray;
}

module.exports = {
    getAllUsers
}
