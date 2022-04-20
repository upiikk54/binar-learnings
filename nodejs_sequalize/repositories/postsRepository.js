const {
    posts
} = require("../models")

class postsRepository {
    static async getPosts() {
        const getPosts = posts.findAll();

        return getPosts;
    }

    static async getPostsByUsersId({id}) {
        const getPosts = posts.findOne({
            where: { id }
        });

        return getUsers;
    }

    static async createPosts({
        title,
        description,
        user_id
    }) {
        const createUsers = posts.create({
            title,
            description,
            user_id
        })
        return createUsers;
    }

    static async updatePostsById({
        id,
        title,
        description
    }) {
        const getById = {
            where: {
                id
            }
        }

        let updatedPosts = {};
        const updatePostsById = posts.update({
            title,
            description
        }, getById)

        updatedPosts = updatePostsById;
        return updatedPosts;
    }

    static async deletePostsById({
        id,
    }) {
        // let deletedUsers = {};
        const deletePostsById = posts.destroy({
            where: { id }
        })
        // users = deletedUsers;
        return deletePostsById;
    }
}

module.exports = postsRepository;