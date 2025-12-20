const express = require("express");
const { addUser, userLogin } = require("../controllers/user.controller");

const router = express.Router();

router.post("/addUser", addUser);
router.post("/userLogin", userLogin);

module.exports = router;
