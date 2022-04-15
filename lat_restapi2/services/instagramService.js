const instagramRepository = require("../repositories/instagramRepositories");

class instagramService {
    static async register({
        name,
        email,
        password
    }) {
        const registerUsers = await instagramRepository.register({
            name,
            email,
            password
        });

        return registerUsers;
    }

    static async login({
        email,
        password
    }) {
        const loginUser = await instagramRepository.login({
            email,
            password,
        });

        return loginUser;
    }

    static async getAll() {
        // Manggil repo get all books
        const getUsers = await instagramRepository.getAll();

        return getUsers;
    }

    static async getAllPosts({user_id}) {
        // Manggil repo get all books
        const getPosts = await instagramRepository.getAllPosts({user_id});

        return getPosts;
    }

    static async postingan({
        user_id,
        title,
        description
    }) {
        const postingan = await instagramRepository.postingan({
            user_id,
            title,
            description
        });

        return postingan;
    }

    static async updatePostingan({
        id,
        title,
        description
    }) {
        // Manggil repo get by id books
        const updatePostsById = await instagramRepository.updatePostingan({
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
        const deletePostsById = await instagramRepository.deletePostsById({
            id
        });

        return deletePostsById;
    }

}

module.exports = instagramService;