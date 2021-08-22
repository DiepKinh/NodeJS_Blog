const express = require("express");
const router = express.Router();

const courceController = require("../app/controllers/CourceController");

// :slug là bỏ ji vào sau nó cũng lấy là cái này
router.get("/create", courceController.create);
router.post("/store", courceController.store);
router.get("/:id/edit", courceController.edit);
router.put("/:id", courceController.update);
router.delete("/:id", courceController.delete);
router.patch("/:id/restore", courceController.restore);
router.delete("/:id/force", courceController.destroy);
router.get("/:slug", courceController.show);

module.exports = router;
