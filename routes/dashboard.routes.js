const express = require("express");
const router = express.Router();

const dashboardControllers = require("../controllers/dashboard.controllers");

router.get("/dashboard", dashboardControllers.getDashboard);

module.exports = router;
