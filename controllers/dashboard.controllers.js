function getDashboard(req, res) {
  if (!req.session.loggedIn) {
    res.status(401).render("errors/401");
  }
  res.render("dashboard/dashboard", { inputData: req.session.familyName });
}

module.exports = {
  getDashboard: getDashboard,
};
