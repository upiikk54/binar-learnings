const {
    create,
    getData
} = require("./functions/files");

const payload = {
    name: "lutfi",
    age: 21,
};

create(payload);

const data = getData();

console.log(data);