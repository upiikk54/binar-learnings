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

    static async updateUsersById({
        id,
        name,
        email
    }) {
        // Manggil repo get by id books
        const updateUsersById = await usersRepository.updateUsersById({
            id,
            name,
            email
        });

        return updateUsersById;
    }

    static async deleteUserById({
        id
    }) {
        // Manggil repo get by id books 
        const deleteUserById = await usersRepository.deleteUserById({
            id
        });

        return deleteUserById;
    }

    static async getUsersById({
        id
    }) {
        // Manggil repo get by id books
        const filterUsersById = await usersRepository.getUsersById({
            id
        });

        return filterUsersById;
    }
}

module.exports = usersService;