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
}

module.exports = new MeController();
