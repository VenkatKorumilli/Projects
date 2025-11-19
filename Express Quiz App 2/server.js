var express = require("express");
var app = express();
var session = require("express-session");
var fs = require("fs");
// var cookiePaser = require("cookie-parser");
var users = require("./users.json");
var bodyParser = require("body-parser");
// app.use(cookiePaser());
var questions = require("./questions.json");
const techs = require("./utils");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");
app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));

app.post("/home", function (req, res) {
  var usr = users.find((user) => {
    if (
      user.username == req.body.username &&
      user.password == req.body.password
    ) {
      return true;
    }
  });
  // console.log(req.body.username);
  // console.log(req.session.username);
  if (usr) {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    res.render("home", {
      user: usr,
      techs: techs.getTechnologies(),
    });
  } else {
    res.sendFile(__dirname + "/myPages/login.html");
  }
});

app.get("/getQuestionByTechnologies/:t", function (req, res) {
  res.render("quiz", {
    questions: techs.getQuestionByTechonologies(req.params),
    // user:techs.getUserDetails(req.session.username)
  });
});

app.get("/logout", function (req, res) {
  req.session.destroy(() => {
    res.sendFile(__dirname + "/myPages/login.html");
  });
});

app.post("/registerpage", function (req, res) {
  var usersArray = JSON.parse(fs.readFileSync("users.json").toString());
  usersArray.push({ username: req.body.username, password: req.body.password });
  fs.writeFileSync("users.json", JSON.stringify(usersArray));
  res.send("Registered Successfully ");
});

app.post("/evaluate", function (req, res) {
  var score = techs.checkedAnswers(req.body);
  console.log(score.correctAns);
  console.log(score.totalAns);
  res.send(`<h1>Your Score is ${score.correctAns} / ${score.totalAns}</h1>`);
});

function authenticate(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.sendFile(__dirname + "/myPages/login.html");
  }
}

app.get("/register", function (req, res) {
  res.sendFile(__dirname + "/myPages/registration.html");
});

app.get("/", authenticate);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/myPages/login.html");
});

app.listen(4500, function (req, res) {
  console.log("Server Running on 4500");
});
