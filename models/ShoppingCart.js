db = require("../database/database");

class ShoppingCart {
  constructor(itemName, familyMemberName, userId) {
    this.itemName = itemName;
    this.familyMemberName = familyMemberName;
    this.userId = userId;
  }

  save() {
    const sql =
      "INSERT INTO shopping_list (item_name, family_member_name, user_id) VALUES (?, ?, ?)";
    db.query(sql, [this.itemName, this.familyMemberName, this.userId]);
  }
}

module.exports = ShoppingCart;
