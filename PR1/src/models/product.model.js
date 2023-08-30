const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
    },
    product_desc: {
      type: String,
      trim: true,
    },
    price:{
        type:Number,
        trim:true,
    },
    quality:{
        type: String,
        trim:true,
    },
    stock:{
        type: Number,
        trim:true,
    },
    is_active: {
      type: Boolean,
    default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = mongoose.model("category",categorySchema)

module.exports = Category