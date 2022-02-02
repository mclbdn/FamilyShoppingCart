const express = require("express");
const router = express.Router();

const authenticationControllers = require("../controllers/authentication.controllers");

router.get("/register", authenticationControllers.getRegister);

router.get("/login", authenticationControllers.getLogin);

module.exports = router;
