const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    order_no: {
      type: Number,
      trim: true,
    },
    order_date: {
      type: Date,
      default: Date.now(),
    },
    total: {
      type: Number,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    // cart: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "cart",
    // },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
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
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
