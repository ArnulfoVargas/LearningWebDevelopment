const express = require("express");
const app = express();

const https = require("https")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res)=>{

    const query = String(req.body.cityName);
    const units = "metric"
    const apiKey = "d26db74d4cd15e9ae913fb4ed06ffb6b";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + query + "&units=" + units;

    https.get(url, (response) =>{
        response.on('data', (d) => {
            const weatherData = JSON.parse(d);
            const temp = weatherData.main.temp;
            const weather = weatherData.weather[0].description;

            const iconName = weatherData.weather[0].icon
            const url = 'https://openweathermap.org/img/wn/' + iconName +'@2x.png'

            res.write("<h1>And the temperature in " + query + " is " + temp + " degrees</h1>");
            res.write("<h3>The weather is currently " + weather + "</h3>");
            res.write("<img src='" + url +"' alt = 'Weather condition'>");
            res.send();
        })
    })
})

app.listen(3000, () => {
    console.log("server running");
})