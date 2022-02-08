const express = require("express");
const defaultRoutes = require("./routes/default.routes");
const authenticationRoutes = require("./routes/authentication.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const session = require("express-session");

const path = require("path");

const app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set parsing
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// Set routes
app.use(defaultRoutes);
app.use(authenticationRoutes);
app.use(dashboardRoutes);

// Handle errors
// 404
app.use(function (req, res) {
  res.status(404).render("errors/404");
});

500
app.use(function (error, req, res, next) {
  res.status(500).render("errors/500");
});

app.listen(3000);
