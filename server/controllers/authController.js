const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const {check, validationResult} = require("express-validator");

exports.register = async (req, res) => {
    const error = validationResult(req);

    if(!error.isEmpty()){
        res.json({error: error.array() });
        return;
    }
    const {username, email} = req.body;
    const findOne_username = await userModel.findOne({ username: username });
    const findOne_email = await userModel.findOne({ email: email });
    if (findOne_username) {
        res.json({
            message: "Username already exist",
            error_type: 1,
            created: false,
        });
        return;
    }
    if (findOne_email) {
        res.json({
            message: "Email already exist",
            error_type: 1,
            created: false,
        });
        return;
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
};


exports.login = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        res.json({ error: error.array(), error_type: 0 });
        return;
    }
    try {
        const user = await userModel.findOne({ username: req.body.username});
        if(!user)
            return res.status(400).json({message: "Wrong credentials in username!", error_type: 1});
        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated)
            return res.status(400).json({message: "Wrong credentials in password!", error_type: 2});
        const { password, ...others } = user._doc;
        return res.status(200).json(others);
    } catch (err) {
        return res.status(500).json(err);
    }
};