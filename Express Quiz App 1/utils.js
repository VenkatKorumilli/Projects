var quiz = require("./questions.json");
var users = require("./users.json");
function getUserDetails(username) {
  var usr = users.find((user) => {
    if (user.username.toLowerCase() == username) {
      return true;
    }
  });
  return usr;
}

function getAllTechnologies() {
  var technologies = [];
  quiz.forEach(function (tech) {
    if (!technologies.includes(tech.technology)) {
      technologies.push(tech.technology);
    }
  });
  // console.log(technologies);
  return technologies;
}

function getQuestionByTechnologies(ques) {
  return quiz.filter((question) => {
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
    // console.log(ans)
    totalAns++;
    var q = quiz.find((question) => {
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
  getAllTechnologies,
  getQuestionByTechnologies,
  getUserDetails,
  checkedAnswers,
};
