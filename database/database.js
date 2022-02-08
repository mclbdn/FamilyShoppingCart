require("dotenv").config();
const mysql = require("mysql2");

// const pool = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: process.env.DB_PASSWORD,
//   database: "FamilyShoppingCart",
// });

const pool = mysql.createPool({
  host: "us-cdbr-east-05.cleardb.net",
  user: "bf645f8296fd3c",
  password: "ca0432a7",
  database: "heroku_15c10645fcbb5b4",
});

module.exports = pool;
