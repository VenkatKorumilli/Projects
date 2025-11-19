var users = require("./users.json");
var questions = require("./questions.json");

function getUserDetails(username) {
  var usr = users.find((user) => {
    if (username.username == user.username) {
      return true;
    }
  });
  return usr;
}

function getTechnologies() {
  var technologies = [];
  questions.forEach((question) => {
    if (!technologies.includes(question.technology)) {
      technologies.push(question.technology);
    }
  });
  return technologies;
}

function getQuestionByTechonologies(ques) {
  return questions.filter((question) => {
    if (question.technology == ques.t) {
      return true;
    }
  });
}

function checkedAnswers(answers) {
  // console.log(answers)
  var correctAns = 0;
  var totalAns = 0;
  for (ans in answers) {
    totalAns++;
    var q = questions.find((question) => {
      if (question.id == ans) {
        if (question.answer == answers[ans]) {
          correctAns++;
        }
        return true;
      }
    });
  }
  return { correctAns, totalAns };
}

module.exports = {
  getUserDetails,
  getTechnologies,
  getQuestionByTechonologies,
  checkedAnswers,
};
