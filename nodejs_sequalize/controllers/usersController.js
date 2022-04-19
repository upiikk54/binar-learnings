const usersService = require("../services/usersService");

const getAll = async (req, res) => {
    // Manggil Service Get Books
    const getUsers = await usersService.getAll();
    res.send(getUsers);
};

const create = async (req, res) => {
    const {
        name,
        email
    } = req.body;

    const createUsers = await usersService.create({
        name,
        email
    });

    res.status(201).send({
        Message: "created users success",
        create_users: createUsers});
};

module.exports = {
    getAll,
    create
};