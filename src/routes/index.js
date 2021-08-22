const newRouter = require("./news");
const siteRouter = require("./site");
const courcesRouter = require("./cources");

function route(app) {
  app.use("/news", newRouter);
  app.use("/cources", courcesRouter);
  app.use("/", siteRouter);
}

module.exports = route;
