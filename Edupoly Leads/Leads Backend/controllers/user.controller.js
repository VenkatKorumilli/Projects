const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.addUser = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.json({ msg: "User Registered Successfully" });
  } catch (e) {
    res.json({ msg: "Error Registering User" });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const data = await userModel.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (data) {
      const token = jwt.sign({ user: data.username }, "shhhhh");
      res.send({ msg: "Successful", token, userDetails: data.username });
    } else {
      res.send({ msg: "Failed" });
    }
  } catch (e) {
    res.send({ msg: "serverError" });
  }
};


