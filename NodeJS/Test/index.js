const fs = require("fs");
const { debug } = require("util");

fs.readFile("./message.txt", 'utf8', (err, data) => {
    if(err) {
        throw err;
    }
    data;
    console.log(data);
});
