// site để chứa các trang mà chỉ có 1 trang như home, search, contact...

const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

// :slug là bỏ ji vào sau nó cũng lấy là cái này
router.get("/search", siteController.search);

// Luôn để ở cuối vì nếu các link trên không có nó mới chạy vô đây
router.get("/", siteController.home);

module.exports = router;
