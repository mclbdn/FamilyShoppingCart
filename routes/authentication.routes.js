const express = require("express");
const router = express.Router();

const authenticationControllers = require("../controllers/authentication.controllers");

router.get("/login", authenticationControllers.getLogin);
router.post("/login", authenticationControllers.postLogin);

router.get("/register", authenticationControllers.getRegister);
router.post("/register", authenticationControllers.postRegister);

module.exports = router;
