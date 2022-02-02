const db = require("../database/database");

function getRegister(req, res) {
  res.render("authentication/register");
}

function getLogin(req, res) {
  res.render("authentication/login");
}

module.exports = {
  getRegister: getRegister,
  getLogin: getLogin,
};
