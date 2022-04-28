const usersRepository = require("../repositories/userRepository");

class UsersService {
    static async getPostsById({
        id
    }) {
        const getPosts = await usersRepository.getPostsById({
            id,
        });

        return {
            status: true,
            status_code: 200,
            message: "Success",
            data: {
                posts: getPosts,
            },
        };
    }
}

module.exports = UsersService;