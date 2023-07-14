const express = require("express");
const body_parser = require("body-parser");
const app = express();

app.use(body_parser.urlencoded({extended : true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    let result = req.body;
    let sum = Number(result.num1) + Number(result.num2)

    res.send('<h3>The result is: ' + sum + "</h3>");
});

app.get("/bmi", (req, res) =>{
    res.sendFile(__dirname + "/bmi_calculator.html")
})

app.post("/bmi", (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let result = weight / (height * height);

    res.send("<h3>Your BMI is: " + result.toPrecision(4) + "</h3>")
})

app.listen(3000, () => {console.log("server running")});