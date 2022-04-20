const PostsRepository = require("../repositories/postsRepository");

class postsService {
    static async getPosts() {
        // Manggil repo get all books
        const getPosts = await PostsRepository.getPosts();

        return getPosts;
    }

    static async createPosts({
        title,
        description,
        user_id
    }) {
        const createPosts = await PostsRepository.createPosts({
            title,
            description,
            user_id
        });

        return createPosts;
    }

    static async updatePostsById({
        id,
        title,
        description
    }) {
        // Manggil repo get by id books
        const updatePostsById = await PostsRepository.updatePostsById({
            id,
            title,
            description
        });

        return updatePostsById;
    }

    static async deletePostsById({
        id
    }) {
        // Manggil repo get by id books 
        const deletePostsById = await PostsRepository.deletePostsById({
            id
        });

        return deletePostsById;
    }

    static async getPostsByUsersId({
        id
    }) {
        // Manggil repo get by id books
        const filterPostsById = await usersRepository.getPostsByUsersId({
            id
        });

        return filterPostsById;
    }
}

module.exports = postsService;