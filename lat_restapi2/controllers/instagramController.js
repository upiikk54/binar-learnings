const instagramService = require("../services/instagramService");

const register = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;

    const registerUsers = await instagramService.register({
        name,
        email,
        password
    });

    res.status(201).send({
        message: `${name} registered successfuly`,
        registerUsers
    });
};

const login = async (req, res) => {
    const {
        email,
        password
    } = req.query;

    const loginUsers = await instagramService.login({
        email,
        password
    });

    res.status(201).send(loginUsers);
};

const getAll = async (req, res) => {
    // Manggil Service Get Books
    const getUsers = await instagramService.getAll();

    res.send(getUsers);
};

module.exports = {
    register,
    getAll,
    login
};