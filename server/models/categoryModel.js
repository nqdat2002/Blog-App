const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
},
    { timestamps: true }
);

const categoryCollection = mongoose.model("categories", CategorySchema);

module.exports = categoryCollection;