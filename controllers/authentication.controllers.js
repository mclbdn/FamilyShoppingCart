const db = require("../database/database");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

function getLogin(req, res) {
  res.render("authentication/login", { inputData: null });
}

function postLogin(req, res) {
  const enteredEmail = req.body.email;
  const enteredPassword = req.body.password;

  let inputData = { hasError: false, message: "" };

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [enteredEmail],
    async function (err, results) {
      // Check if user has an account
      if (results.length >= 1) {
        // Check if passwords match
        const currentUser = results[0];
        if (await bcrypt.compare(enteredPassword, currentUser.password)) {
          // Password is correct
          console.log("Password is correct.");
          req.session.loggedIn = true;
          req.session.familyName = currentUser.family_name;
          res.redirect("/dashboard");
        } else {
          // Password is not correct
          inputData.hasError = true;
          inputData.message = "Entered password is not correct.";
          res
            .status(200)
            .render("authentication/login", { inputData: inputData });
        }
      } else {
        // User with this e-mail doesn't exist
        inputData.hasError = true;
        inputData.message = "An user with this e-mail address doesn't exist.";
        res.render("authentication/login", { inputData: inputData });
      }
    }
  );
}

function getRegister(req, res) {
  res.render("authentication/register", { inputData: null });
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
  postLogin: postLogin,
};
