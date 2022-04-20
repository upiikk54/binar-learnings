const postsService = require("../services/postsService");

const getPosts = async (req, res) => {
    // Manggil Service Get Books
    const getPosts = await postsService.getPosts();
    res.send(getPosts);
};

const createPosts = async (req, res) => {
    const {
        title,
        description,
        user_id
    } = req.body;

    const createPosts = await postsService.createPosts({
        title,
        description,
        user_id
    });

    res.status(201).send({
        Message: "created Posts success",
        create_Posts: createPosts
    });
};

const updatePostsById = async (req, res) => {
    const {
        title,
        description
    } = req.body;
    const {
        id
    } = req.params;
    const updatePostsById = await postsService.updatePostsById({
        id,
        title,
        description
    });

    res.status(200).send({
        message: "data telah berhasil diupdate",
        update_users: updatePostsById});
}

const deletePostsById = async (req, res) => {
    const {
        id
    } = req.params;
    const deletePostsById = await postsService.deletePostsById({
        id
    });

    res.status(200).send({
        message: "data telah berhasil dihapus",
        delete_Posts: deletePostsById});
};

const getPostsByUsersId = async (req, res) => {
    const {
        id
    } = req.params;
    const getPostsByUsersId = await usersService.getPostsByUsersId({
        id
    });

    res.status(200).send(getPostsByUsersId);
}

module.exports = {
    getPosts,
    createPosts,
    getPostsByUsersId,
    updatePostsById,
    deletePostsById
};