const express = require("express");
const router = express.Router();

const authenticationControllers = require("../controllers/authentication.controllers");

router.get("/register", authenticationControllers.getRegister);

router.get("/login", authenticationControllers.getLogin);

router.post("/register", authenticationControllers.postRegister)

module.exports = router;
