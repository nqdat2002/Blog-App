const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.put("/update/:id", userController.update);
router.delete("/delete/:id", userController.delete);
router.get("/getOne/:id", userController.getOne);

module.exports = router;