const getThreads = require("../serviceFactory/getOneThread");

const getOneThread = async (ctx, next) => {

    const response = await getThreads.getOne(ctx, next);

    if(!response){
        throw new Error("NO_SUCH_THREAD");
    }

    return response.dataValues;
}

module.exports = {
    getOneThread
}
