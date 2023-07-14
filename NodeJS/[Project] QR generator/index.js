import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'

inquirer.prompt({"name" : "URL","message" : "Hello, please paste a link to convert:", "type": "input"}).then((answer) => {
    let result = qr.image(answer.URL, {"type" : "png"});
    result.pipe(fs.createWriteStream("qr.png"));
} )