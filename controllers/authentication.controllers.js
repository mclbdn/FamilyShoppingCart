const db = require("../database/database");

function getRegister(req, res) {
  res.render("authentication/register");
}

module.exports = {
  getRegister: getRegister,
};
