const Cource = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [GET] /
  home(req, res, next) {
    Cource.find({})
      .then((cources) => {
        res.render("home", { cources: mutipleMongooseToObject(cources) });
      })
      .catch((err) => {
        next(err);
      });
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
