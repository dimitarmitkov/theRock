const {model, attributesArray} = require("../models/comments");

async function getAll(req, next) {

    const {threadId} = req.request.body;

    return await model.findAll({
        attributes: attributesArray,
        where: {
            threadId: threadId
        },
        order: [
            ['id', 'ASC']
        ]
    });
}

module.exports = {
    getAll
}
