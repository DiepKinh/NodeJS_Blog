const Cource = require("../models/Course");

class SiteController {
  // [GET] /
  home(req, res) {
    Cource.find({}, function (err, cources) {
      if (!err) {
        res.json(cources);
      } else {
        res.status(400).json({ error: "Loi!!!" });
      }
    });
    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
