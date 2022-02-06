const ShoppingCart = require("../models/ShoppingCart");

// Dashboar GET
async function getDashboard(req, res) {
  // If user is not logged in, prohibit access
  if (!req.session.loggedIn) {
    return res.status(401).render("errors/401");
  }

  const currentShoppingCartItems = await ShoppingCart.showShoppingList(
    req.session.userId
  );

  return res.render("dashboard/dashboard", {
    currentShoppingCartItems: currentShoppingCartItems,
  });
}

// Dashboard POST
function postDashboard(req, res) {
  const enteredItemName = req.body.item_name;
  const enteredFamilyMemberName = req.body.family_member_name;
  const currentUserId = req.session.userId;

  const shoppingCart = new ShoppingCart(
    enteredItemName,
    enteredFamilyMemberName,
    currentUserId
  );

  shoppingCart.addNewItemToShoppingList();

  return res.redirect("/dashboard");
}

module.exports = {
  getDashboard: getDashboard,
  postDashboard: postDashboard,
};
