const {
    users
} = require("../models")

class usersRepository {
    static async getAll() {
        const getUsers = users.findAll();

        return getUsers;
    }

    static async getUsersById({id}) {
        const getUsers = users.findOne({
            where: { id }
        });

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

    static async updateUsersById({
        id,
        name,
        email
    }) {
        const getById = {
            where: { id }
        }
        
        let updatedUsers = {};
        const updateUsersById = users.update({
            name,
            email
        }, getById)

        updatedUsers = updateUsersById;
        return updatedUsers;
    }

    static async deleteUserById({
        id,
    }) {
        // let deletedUsers = {};
        const deleteUserById = users.destroy({
            where: { id }
        })
        // users = deletedUsers;
        return deleteUserById;
    }
}

module.exports = usersRepository;