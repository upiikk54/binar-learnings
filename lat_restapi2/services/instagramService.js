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
}

module.exports = instagramService;