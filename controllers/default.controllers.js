function getMainPage(req, res) {
  res.render("main");
}

module.exports = {
  getMainPage: getMainPage,
};
