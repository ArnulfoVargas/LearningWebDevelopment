const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Hello, im Arnulfo</h1><p>My e-mail is: vargas.mejia.arnulfo04</p>")
})

app.listen(3000, () => {console.log("Server running");} );