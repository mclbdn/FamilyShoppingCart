const ShoppingCart = require("../models/ShoppingCart");

async function getDashboard(req, res) {
  // If user is not logged in, prohibit access
  if (!req.session.loggedIn) {
    return res.status(401).render("errors/401");
  }

  const currentShoppingCart = await ShoppingCart.showShoppingList(req.session.userId);
  console.log(currentShoppingCart)
  return res.render("dashboard/dashboard", { inputData: currentShoppingCart });
}

function postDashboard(req, res) {
  const enteredItemName = req.body.item_name;
  const enteredFamilyMemberName = req.body.family_member_name;
  const currentUserId = req.session.userId;

  console.log(enteredItemName, enteredFamilyMemberName);
  const shoppingCart = new ShoppingCart(
    enteredItemName,
    enteredFamilyMemberName,
    currentUserId
  );

  shoppingCart.save();

  return res.redirect("/dashboard");
}

module.exports = {
  getDashboard: getDashboard,
  postDashboard: postDashboard,
};
