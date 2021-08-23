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
    // không muốn anh hưởng đến req.body nên ta tạo cái mới là form data, và áp dụng vùng nhớ ... ở JS Nâng Cao nè!
    const formData = { ...req.body };
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const cource = new Cource(req.body);
    cource
      .save()
      .then(() => res.redirect("/me/stored/cources"))
      .catch((error) => {});
  }

  // [GET] /cources/:id/edit
  edit(req, res, next) {
    Cource.findById({ _id: req.params.id })
      .then((cource) => {
        res.render("cources/edit", { cource: mongooseToObject(cource) });
      })
      .catch((err) => next(err));
  }

  // [PUT] /cources/:id
  update(req, res, next) {
    Cource.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect("/me/stored/cources");
      })
      .catch((err) => next(err));
  }

  // [DELETE] /cources/:id
  delete(req, res, next) {
    Cource.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch((err) => next(err));
  }

  // [PATCH] /cources/:id/restore
  restore(req, res, next) {
    Cource.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch((err) => next(err));
  }

  // [DELETE] /cources/:id/force
  destroy(req, res, next) {
    Cource.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch((err) => next(err));
  }

  // [POST] /cources/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Cource.delete({ _id: { $in: req.body.courceIds } })
          .then(() => {
            res.redirect("back");
          })
          .catch((err) => next(err));
        break;
      default:
        res.json({ message: "Error!!!" });
    }
  }
}

module.exports = new CourceController();
