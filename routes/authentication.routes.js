const express = require("express");
const router = express.Router();

const authenticationControllers = require("../controllers/authentication.controllers")

router.get("/register", authenticationControllers.getRegister);

module.exports = router;
