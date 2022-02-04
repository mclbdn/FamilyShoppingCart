const express = require("express");
const router = express.Router();

const dashboardControllers = require("../controllers/dashboard.controllers");

router.get("/dashboard", dashboardControllers.getDashboard);
router.post("/dashboard", dashboardControllers.postDashboard)

module.exports = router;
