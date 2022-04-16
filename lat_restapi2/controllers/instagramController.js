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
        data: registerUsers
    });
};

const postingan = async (req, res) => {
    const {
        user_id,
        title,
        description
    } = req.body;

    const postingan = await instagramService.postingan({
        user_id,
        title,
        description
    });

    res.status(201).send({
        message: `user_id ${user_id} post success`,
        postingan
    });
};

const updatePostingan = async (req, res) => {
    const {
        title,
        description
    } = req.body;
    const {
        id
    } = req.params;
    const updatePostsById = await instagramService.updatePostingan({
        id,
        title,
        description
    });



    res.status(200).send(updatePostsById);
}

const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const {token} = await instagramService.login({
        email,
        password
    });

    res.status(200).send({ message: 'login success',token});
};

const getAll = async (req, res) => {
    // Manggil Service Get Books
    const getUsers = await instagramService.getAll();

    res.send(getUsers);
};

const getAllPosts = async (req, res) => {
    // Manggil Service Get Books
    const { user_id } = req.query;
    const getPosts = await instagramService.getAllPosts({user_id});

    res.send(getPosts);
};

const deletePostsById = async (req, res) => {
    const {
        id
    } = req.params;
    const deletePostsById = await instagramService.deletePostsById({
        id
    });

    res.status(200).send(deletePostsById);
};

module.exports = {
    register,
    getAll,
    login,
    postingan,
    getAllPosts,
    updatePostingan,
    deletePostsById
};