const db = require("../database/database");

async function getMainPage(req, res) {
  const query = `
    SELECT * FROM users
  `;

  const [users] = await db.query(query);
  console.log(users);

  res.render("index");
}

async function addFamily(req, res) {
  const data = [req.body.familyName, req.body.password, req.body.email];
  await db.query(`
    INSERT INTO users (family_name, password, email) VALUES (?)
  `, [data])
  console.log("added");

  res.render("index");
}

module.exports = {
  getMainPage: getMainPage,
  addFamily: addFamily,
};
