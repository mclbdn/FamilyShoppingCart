const db = require("../database/database");

async function getMainPage(req, res) {
  res.render("index");
}

async function addFamily(req, res) {
  res.render("index");
}

module.exports = {
  getMainPage: getMainPage,
  addFamily: addFamily,
};
