const {model, attributesArray} = require("../models/threads");

async function getOne(req, next) {

    const {id} = req.request.body;

    return await model.findOne({
        attributes: attributesArray,
        where: {
            id: id
        }
    });
}

module.exports = {
    getOne
}
