const { Router } = require("express");
const enrollmentController = require("../controllers/enrollmentController");

const router = Router();

router.post("/", enrollmentController.create);
router.get("/", enrollmentController.list);
router.get("/:id", enrollmentController.getById);
router.delete("/:id", enrollmentController.remove);

module.exports = router;