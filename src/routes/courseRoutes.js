const { Router } = require("express");
const courseController = require("../controllers/courseController");

const router = Router();

router.post("/", courseController.create);
router.get("/", courseController.list);
router.get("/:id", courseController.getById);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.remove);

module.exports = router;