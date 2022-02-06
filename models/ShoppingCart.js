const res = require("express/lib/response");

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

  static async showShoppingList(userId) {
    let shoppingList = [];
    const sql =
      "SELECT item_name, family_member_name FROM shopping_list WHERE user_id = (?)";
    const results = await db.promise().query(sql, [userId]);
    for(const result of results[0]) {
      shoppingList.push(result)
    }
    return shoppingList;
  }
}

module.exports = ShoppingCart;
