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
        token: "111-luthfi@gmail.com"
    },
    {
        id: 112,
        name: "perdian lalu",
        email: "perdian@gmail.com",
        password: "perdian12",
        token: "112-perdian@gmail.com"

    },
    {
        id: 113,
        name: "rio geraldi",
        email: "rio@gmail.com",
        password: "riogeraldi12",
        token: "113-rio@gmail.com"
    }
];

class instagramRepository {
    static async register({
        name,
        email,
        password
    }) {
        const generatedID = await generator.generateID();
        
        const filteredByEmail = Users.filter((a) =>{
            if (a.email != email){
                return;
            }
            return a;
        })
        Users = filteredByEmail
        Users.push({
            id: generatedID,
            name,
            email,
            password,
            token: `${id}-${email}`
        });

        return {
            id: generatedID,
            name,
            email,
            password,
            token: `${id}-${email}`
        };
    }
}

module.exports = instagramRepository;