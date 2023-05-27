const userModel = require("../models/userModel");
const postModel = require("../models/postModel");
const bcrypt = require("bcrypt");

exports.update = async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
         res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.delete = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        try {
            await postModel.deleteMany({ username: user.username });
            await userModel.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(404).json("User not found!");
    }
};

exports.getOne = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
};