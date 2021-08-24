const Cource = require("../models/Course");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
const { response } = require("express");

class MeController {
  // [GET] /me/stored/cources
  storedCources(req, res, next) {
    let courceQuery = Cource.find({});

    if (req.query.hasOwnProperty("_sort")) {
      courceQuery = courceQuery.sort({ [req.query.column]: [req.query.type] });
    }

    Promise.all([courceQuery, Cource.countDocumentsDeleted()])
      .then(([cources, deletedCource]) => {
        res.render("me/stored-cources", {
          cources: mutipleMongooseToObject(cources),
          deletedCource, //deletedCource: deletedCource
        });
      })
      .catch((err) => next(err));

    // Gộp 2 promise dưới thành cái trên
    // Cource.find({})
    //   .then((cources) => {
    //     res.render("me/stored-cources", {
    //       cources: mutipleMongooseToObject(cources),
    //     });
    //   })
    //   .catch((err) => next(err));

    // Cource.countDocumentsDeleted()
    //   .then((deletedCource) => {
    //     console.log(deletedCource);
    //   })
    //   .catch((err) => next(err));
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
