const categoryModel = require("../models/categoryModel");

exports.create = async (req, res) => {
    const newCat = new categoryModel(req.body);
    try {
        const savedCat = await newCat.save();
        return res.status(200).json(savedCat);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.getAll = async (req, res) => {
    try {
        const cats = await categoryModel.find();
        return res.status(200).json(cats);
    } catch (err) {
        return res.status(500).json(err);
    }
};

