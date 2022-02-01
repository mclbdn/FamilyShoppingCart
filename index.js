const express = require("express");
const defaultRoutes = require("./routes/default.routes");
const authenticationRoutes = require("./routes/authentication.routes");

const path = require("path");

const app = express();

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

app.listen(3000);
