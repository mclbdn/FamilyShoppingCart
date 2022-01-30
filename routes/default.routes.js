const express = require("express");
const router = express.Router();

const defaultController = require("../controllers/default.controllers");

router.get("/", defaultController.getMainPage);

module.exports = router;
