const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name:
    { 
        type: String, required: true 
    },
    age:
     { 
        type: Number, required: true 
    },
    phonenumber: 
    { 
        type: String, required: true 
    },
    address: 
    { 
        type: String, required: true 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
