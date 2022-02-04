async function getMainPage(req, res) {
  const loggedIn = req.session.loggedIn;
  res.render("index", { loggedIn: loggedIn });
}

module.exports = {
  getMainPage: getMainPage,
};
