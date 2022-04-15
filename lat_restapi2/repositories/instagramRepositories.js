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

    static async getAllPosts({user_id}) {
        if(user_id){
            const filterPostsByQuery = Posts.filter((a) => {
                if (a.user_id == user_id) {
                    return user_id;
                }
            });
            
            Posts = filterPostsByQuery;
        }
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

    static async updatePostingan({
        id,
        title,
        description,
    }) {
        let updatedPosts = {};
        const updatePosts = Posts.filter((c) => {
            if (c.id == id) {
                c.title = title;
                c.description = description;

                updatedPosts = {
                    id: c.id,
                    title: c.title,
                    description: c.description
                }
            }
            return c;
        });
        Posts = updatePosts
        return updatedPosts;
    }

    static async deletePostsById({id}){
        let deletedPosts = {};
        const filteredPosts = Posts.filter((b) => {
            if(b.id == id){

                deletedPosts = {
                    id: b.id,
                    user_id: b.user_id,
                    title: b.title,
                    description: b.description
                };
            }else{
                return b;
            }
        });

        Posts = filteredPosts;
        return deletedPosts;
    }


}

module.exports = instagramRepository;