const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

// :slug là bỏ ji vào sau nó cũng lấy là cái này
router.get("/:slug", newsController.show);

// Luôn để ở cuối vì nếu các link trên không có nó mới chạy vô đây
router.get("/", newsController.index);

module.exports = router;
