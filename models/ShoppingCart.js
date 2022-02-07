db = require("../database/database");

class ShoppingCart {
  constructor(itemName, familyMemberName, userId) {
    this.itemName = itemName;
    this.familyMemberName = familyMemberName;
    this.userId = userId;
  }

  addNewItemToShoppingList() {
    const sql =
      "INSERT INTO shopping_list (item_name, family_member_name, user_id) VALUES (?, ?, ?)";
    db.query(sql, [this.itemName, this.familyMemberName, this.userId]);
  }

  static deleteItemFromShoppingCart(itemId, userId) {
    const sql = "DELETE FROM shopping_list WHERE id = ? AND user_id = ?";
    db.query(sql, [itemId, userId]);
  }

  static async showShoppingList(userId) {
    let shoppingList = [];

    const sql =
      "SELECT id, item_name, family_member_name FROM shopping_list WHERE user_id = (?)";

    const results = await db.promise().query(sql, [userId]);

    for (const result of results[0]) {
      shoppingList.push(result);
    }

    return shoppingList;
  }
}

module.exports = ShoppingCart;
