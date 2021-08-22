const newRouter = require("./news");
const siteRouter = require("./site");
const courcesRouter = require("./cources");
const meRouter = require("./me");

function route(app) {
  app.use("/news", newRouter);
  app.use("/cources", courcesRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
}

module.exports = route;
