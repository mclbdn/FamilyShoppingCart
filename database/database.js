require("dotenv").config();
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "FamilyShoppingCart",
});

module.exports = pool;
