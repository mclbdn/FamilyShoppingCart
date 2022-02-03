const db = require("../database/database");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

function getRegister(req, res) {
  res.render("authentication/register", { inputData: null });
}

function getLogin(req, res) {
  res.render("authentication/login");
}

function postRegister(req, res) {
  const familyName = req.body.familyName;
  const email = req.body.email;
  const password = req.body.password;
  const repeatPassword = req.body.repeatPassword;

  let inputData = { hasError: false, message: "" };

  // Check if user already exists
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async function (err, results) {
      if (results.length > 1) {
        inputData.hasError = true;
        inputData.message = "An user with this e-mail address already exists.";
        res.render("authentication/register", { inputData: inputData });
      } else {
        if (password !== repeatPassword) {
          inputData.hasError = true;
          inputData.message = "Entered passwords to not match.";
          res.render("authentication/register", {
            inputData: inputData,
          });
        } else {
          const hashedPassword = await bcrypt.hash(password, 12);
          console.log(hashedPassword);
          const newUser = new User(familyName, hashedPassword, email);
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
