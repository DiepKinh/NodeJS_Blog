const Cource = require("../models/Course");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/cources
  storedCources(req, res, next) {
    Cource.find({})
      .then((cources) => {
        res.render("me/stored-cources", {
          cources: mutipleMongooseToObject(cources),
        });
      })
      .catch((err) => next(err));
  }

  // [GET] /me/trash/cources
  trashCources(req, res, next) {
    Cource.findDeleted({})
      .then((cources) => {
        res.render("me/trash-cources", {
          cources: mutipleMongooseToObject(cources),
        });
      })
      .catch((err) => next(err));
  }
}

module.exports = new MeController();
