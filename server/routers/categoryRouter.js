const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

router.post("/create", categoryController.create);
router.get("/getAll", categoryController.getAll);

module.exports = router;