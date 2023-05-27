const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { check, validationResult } = require("express-validator");

router.post("/register", [
    check("username", "Enter username").not().isEmpty(),
    check("email", "Enter email").not().isEmpty().isEmail(),
    check("password", "Enter Password").not().isEmpty().isLength({ min: 5 }),
], authController.register);

router.post("/login", [
    check("username", "Enter username").not().isEmpty(),
    check("password", "Enter password").not().isEmpty(),
], authController.login);

module.exports = router;