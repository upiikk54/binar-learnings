const {
    users
} = require("../models")

class usersRepository {
    static async getAll() {
        const getUsers = users.findAll();

        return getUsers;
    }

    static async create({
        name,
        email
    }) {
        const createUsers = users.create({
            name,
            email
        })
        return createUsers;
    }
}

module.exports = usersRepository;