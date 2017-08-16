const express = require("express")
const app = express()
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const expressValidator = require("express-validator")
app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())


const todos = [
    "Wash the car",
    "Learn Node",
    "Catch up on some projects",
    "Stop bugging Reggie",
    "Dont catch the zZz in class"
];

const completed = [
  
];

app.get("/", function (req, res) {
  res.render('index', {
    todos: todos,
    completed: completed
   });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
})

app.post("/completed", function (req, res) {
  completed.push(req.body.button);
  res.redirect('/');
})

app.listen(3000, function() {
  console.log("Listening on 3000")
})
