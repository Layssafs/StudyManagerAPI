const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/", userController.create);
router.get("/", userController.list);
router.get("/:id", userController.getById);
router.get("/:id/courses", userController.getUserCourses);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

module.exports = router;