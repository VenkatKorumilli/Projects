var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  username: String,
  password: String,
});

var userModel = mongoose.model("user", userSchema);

module.exports = userModel;
