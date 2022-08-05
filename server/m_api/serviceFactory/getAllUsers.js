const {model, attributesArray} = require("../models/users");

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
