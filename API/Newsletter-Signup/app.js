const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());


app.listen(3000, ()=>{
    console.log("server running")
})