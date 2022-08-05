const {model, attributesArray} = require("../models/threads");

async function getAll(req, res, next) {

    return await model.findAll({
        attributes: attributesArray,
        where: {
            deletedAt: null
        },
        order: [
            ['id', 'ASC']
        ]
    });
}

module.exports = {
    getAll
}
