const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const date = require(__dirname + "/Public/JS/date.js")

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("Public"))
app.set('view engine', 'ejs')


//Variables
let toDoActions = [];
let workActions = [];

app.get('/', (req, res) => {
    let day = date.getDate(); 

    res.render('list', {title:day, actions : toDoActions});
})

app.post('/', (req, res)=>{

    if(req.body.list === 'Work'){
        workActions.push(req.body.action)
        res.redirect('/work')
    }
    else{
        toDoActions.push(req.body.action);
        res.redirect('/')
    }
})

app.get('/work', (req, res) => {
    res.render('list', {title:"Work Tasks", actions : workActions});
})

app.get("/about", (req, res) => {
    res.render('about')
})

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});