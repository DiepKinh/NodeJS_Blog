const Cource = require("../models/Course");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class CourceController {
  // [GET] /cources/:slug
  show(req, res, next) {
    Cource.findOne({ slug: req.params.slug })
      .then((cource) => {
        res.render("cources/show", { cource: mongooseToObject(cource) });
      })
      .catch((err) => next(err));
  }

  // [GET] /cources/create
  create(req, res, next) {
    res.render("cources/create");
  }

  // [POST] /cources/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const cource = new Cource(req.body);
    cource
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new CourceController();
