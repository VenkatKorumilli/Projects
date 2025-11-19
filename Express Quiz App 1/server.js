var express = require("express");
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
var users = require("./users.json");
var quiz = require("./questions.json");
var techs = require("./utils");
// var usr = {
//   "username": "Venkat",
//   "password": "123",
//   "profile_pic":"/venkat.png"
// }
app.use(express.static("./images"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));
// console.log(quiz)
app.post("/home", function (req, res) {
  var usr = users.find((user) => {
    if (
      user.username.toLowerCase() == req.body.username.toLowerCase() &&
      user.password == req.body.password
    ) {
      return true;
    }
  });
  if (usr) {
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    console.log(techs.getAllTechnologies());
    res.render("home", { user: usr, technology: techs.getAllTechnologies() });
    // console.log(usr);
  } else {
    res.sendFile(__dirname + "/myPages/login failure.html");
  }
});

app.get("/getQuestionsByCategory/:t", function (req, res) {
  // techs.getQuestionByTechnologies(req.params)
  res.render("quiz", {
    ques: techs.getQuestionByTechnologies(req.params),
    user: techs.getUserDetails(req.session.username),
    techs: req.params.t,
  });
});

app.get("/logout", function (req, res) {
  req.session.destroy(() => {
    res.sendFile(__dirname + "/myPages/login.html");
  });
});

app.post("/evaluate", function (req, res) {
  var score = techs.checkedAnswers(req.body);
  res.send(
    `<h1>You Have Completed the Test</h1>
  <h1>Your Score : ${score.correctAns} / ${score.totalAns}</h1>
  `
  );
  // console.log(req.body)
});

function authenticate(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.sendFile(__dirname + "/myPages/login.html");
  }
}

app.use("/", authenticate);

app.use("/", function (req, res) {
  res.sendFile(__dirname + "/myPages/login.html");
});

app.listen(4500, function (req, res) {
  console.log("Server Running on 4500");
});
