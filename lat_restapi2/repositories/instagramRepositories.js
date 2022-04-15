const generator = require("../utils/instagramGenerator")

let Posts = [{
        id: 123,
        user_id: 11,
        title: "postingan luthfi",
        description: "aku pendiam"
    },
    {
        id: 345,
        user_id: 12,
        title: "postingan perdian",
        description: "aku ganteng"

    },
    {
        id: 567,
        user_id: 13,
        title: "postingan rio",
        description: "aku tinggi"
    }
];

let Users = [{
        id: 111,
        name: "praditya luthfi",
        email: "luthfi@gmail.com",
        password: "luthfi12",
        token: ""
    },
    {
        id: 112,
        name: "perdian lalu",
        email: "perdian@gmail.com",
        password: "perdian12",
        token: ""

    },
    {
        id: 113,
        name: "rio geraldi",
        email: "rio@gmail.com",
        password: "riogeraldi12",
        token: ""
    }
];

class instagramRepository {
    static async getAll() {
        return Users;
    }

    static async getAllPosts() {
        return Posts;
    }

    static async register({
        name,
        email,
        password
    }) {
        const generatedID = await generator.generateID();

        if (Users.find((user) => user.email === email)) {

            return `${email} allready registered`;
        }

        Users.push({
            id: generatedID,
            name,
            email,
            password
        });

        return {
            id: generatedID,
            name,
            email,
            password
        };
    }

    static async login({
        email,
        password
    }) {
        const filterUsersByQuery = Users.filter((a) => {
            if (a.email != email || a.password != password) {
                return {
                    Message: "incorrect email and password"
                };
            }
            a.token = `${a.id}-${a.email}`
            return a;
        });
        return filterUsersByQuery;
    }

    static async postingan({
        user_id,
        title,
        description
    }) {
        const generatedID = await generator.generateID();

        Posts.push({
            id: generatedID,
            user_id,
            title,
            description
        });

        return {
            id: generatedID,
            user_id,
            title,
            description
        };
    }


}

module.exports = instagramRepository;