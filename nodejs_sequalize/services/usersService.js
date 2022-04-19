const usersRepository = require("../repositories/usersRepository");

class usersService {
    static async getAll() {
        // Manggil repo get all books
        const getUsers = await usersRepository.getAll();

        return getUsers;
    }

    static async create({
        name,
        email
    }) {
        const createUsers = await usersRepository.create({
            name,
            email
        });

        return createUsers;
    }
}

module.exports = usersService;