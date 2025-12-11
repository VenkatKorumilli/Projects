const express = require("express");
const { addUser, userLogin } = require("../controllers/user.controller");

const router = express.Router();

router.post("/register", addUser);
router.post("/login", userLogin);

module.exports = router;
