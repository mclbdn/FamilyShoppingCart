const db = require("../database/database");

class User {
  constructor(familyName, password, email) {
    this.familyName = familyName;
    this.password = password;
    this.email = email;
  }

   save() {
    const sql = `INSERT INTO users (family_name, password, email) VALUES (?, ?, ?)`;
   db.query(sql, [this.familyName, this.password, this.email]);
  }
}

module.exports = User;
