const instagramService = require("../services/instagramService");

const register = async (req, res) => {
    const filteredByEmail = Users.filter((a) =>{
        if (a.email != email){
            return;
        }
        return a;
    })
    Users = filteredByEmail
    const {
        name,
        email,
        password
    } = req.body;

    const registerUsers = await instagramService.register({
        name,
        email,
        password
    });

    res.status(201).send(registerUsers);
};

module.exports = {
    register
};