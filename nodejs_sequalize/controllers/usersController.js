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
        create_users: createUsers
    });
};

const updateUsersById = async (req, res) => {
    const {
        name,
        email
    } = req.body;
    const {
        id
    } = req.params;
    const updateUsersById = await usersService.updateUsersById({
        id,
        name,
        email
    });

    res.status(200).send({
        message: "data telah berhasil diupdate",
        update_users: updateUsersById});
}

const deleteUserById = async (req, res) => {
    const {
        id
    } = req.params;
    const deleteUserById = await usersService.deleteUserById({
        id
    });

    res.status(200).send({
        message: "data telah berhasil dihapus",
        delete_users: deleteUserById});
};

const getUsersById = async (req, res) => {
    const {
        id
    } = req.params;
    const getUsersById = await usersService.getUsersById({
        id
    });

    res.status(200).send(getUsersById);
}

module.exports = {
    getAll,
    create,
    getUsersById,
    updateUsersById,
    deleteUserById
};