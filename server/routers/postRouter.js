const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.post("/create", postController.create);
router.put("/update/:id", postController.update);
router.delete("/delete/:id", postController.delete);
router.get("/getOne/:id", postController.getOne);
router.get("/getAll", postController.getAll);

module.exports = router;