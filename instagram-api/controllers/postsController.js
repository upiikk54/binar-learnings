const postsService = require("../services/postsService");

const create = async (req, res) => {
    const {
        title,
        description
    } = req.body;

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } = await postsService.create({
        user_id,
        title,
        description
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const deleteById = async (req, res) => {
    const {
        id
    } = req.params;

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } = await postsService.deleteById({
        id,
        user_id,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const updateById = async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        title,
        description
    } = req.body;

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } = await postsService.updateById({
        id,
        user_id,
        title,
        description,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = {
    create,
    deleteById,
    updateById,
};