const mongoose = require("mongoose");

const carSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    color: String
})

const Cars = mongoose.model("Cars", carSchema);
module.exports = Cars;