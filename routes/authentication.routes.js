const express = require("express");
const router = express.Router();

const authenticationControllers = require("../controllers/authentication.controllers");

// Login routes
router.get("/login", authenticationControllers.getLogin);
router.post("/login", authenticationControllers.postLogin);

// Logout route
router.post("/logout", authenticationControllers.postLogout);

// Register routes
router.get("/register", authenticationControllers.getRegister);
router.post("/register", authenticationControllers.postRegister);

module.exports = router;
