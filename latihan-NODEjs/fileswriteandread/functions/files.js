const fs = require("fs");

function create(props) {
    const data = {
        name: props.name,
        age: props.age,
    };

    fs.writeFileSync("./data/data.json", JSON.stringify(data));
}

function getData() {
    const data = fs.readFileSync("./data/data.json", "utf-8");

    return JSON.parse(data);
}

module.exports = { create, getData };