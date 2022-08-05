const getUsers = require("../serviceFactory/getAllUsers");

const getAllUsers = async (ctx, next) => {

    const response = await getUsers.getAll(ctx, next);

    const dataArray = response.map(data => {
        return data.dataValues;
    });
    return dataArray;
}

module.exports = {
    getAllUsers
}
