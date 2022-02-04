const ShoppingCart = require("../models/ShoppingCart");

function getDashboard(req, res) {
  if (!req.session.loggedIn) {
    return res.status(401).render("errors/401");
  }
  return res.render("dashboard/dashboard", { inputData: req.session.userId });
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
