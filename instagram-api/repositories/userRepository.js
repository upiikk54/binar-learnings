const {
    users, posts
} = require("../models");

class UsersRepository {
    static async getByEmail({
        email
    }) {
        const getUser = await users.findOne({
            where: {
                email: email
            }
        });

        return getUser;
    }

    static async create({
        name,
        email,
        password
    }) {
        const createdUser = users.create({
            name,
            email,
            password,
        });

        return createdUser;
    }

    static async getPostsById({
        id
    }) {
        const getPosts = await posts.findAll({
            where: {
                user_id: id
            }
        });

        return getPosts;
    }
}

module.exports = UsersRepository;