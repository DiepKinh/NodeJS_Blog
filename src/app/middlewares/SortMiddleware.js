module.exports = function SortMiddleware(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: "default",
  };
  if (req.query.hasOwnProperty("_sort")) {
    // res.locals._sort.enabled = true;
    // res.locals._sort.column = req.query.column;
    // res.locals._sort.type = req.query.type;
    // Cách này là y chang 3 cái trên, áp dụng hợp nhất object từ khóa JS nâng cao
    Object.assign(res.locals._sort, {
      enabled: true,
      type: req.query.type,
      column: req.query.column,
    });
  }
  next();
};
