const {
    posts
} = require("../models");

class postsRepository {
    static async create({
        user_id,
        title,
        description
    }) {
        const createdUser = posts.create({
            user_id,
            title,
            description
        });

        return createdUser;
    }

    static async getAll() {
        const getAll = await posts.findAll();

        return getAll;
    }

    static async getById({
        id
    }) {
        const getPost = await posts.findOne({
            where: {
                id
            }
        });

        return getPost;
    }

    static async deleteById({
        id
    }) {
        const getPosts = posts.destroy({
            where: {
                id
            }
        });

        return getPosts;
    }

    static async updateById({
        id,
        title,
        description
    }) {
        const updateById = await posts.update({
            title,
            description,
        }, {
            where: {
                id
            }
        });

        return updateById;
    }
}

module.exports = postsRepository;