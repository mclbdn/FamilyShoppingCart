const db = require("../database/database");
const User = require("../models/User");

function getRegister(req, res) {
  res.render("authentication/register", {message:null});
}

function getLogin(req, res) {
  res.render("authentication/login");
}

function postRegister(req, res) {
  const familyName = req.body.familyName;
  const email = req.body.email;
  const password = req.body.password;
  const repeatPassword = req.body.repeatPassword;

  // Check if user already exists
   db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    function (err, results) {
      if (results.length > 1) {
        res.render("authentication/register", {message:"It exists"})
      } else {
        if (password !== repeatPassword) {
          res.render("authentication/register", { message: "Passwords do not match" });
        } else {
          const newUser = new User(familyName, password, email);
          newUser.save();
          res.redirect("/login");
        }
      }
    }
  );
}

module.exports = {
  getRegister: getRegister,
  getLogin: getLogin,
  postRegister: postRegister,
};
