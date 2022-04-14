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
}

module.exports = instagramService;