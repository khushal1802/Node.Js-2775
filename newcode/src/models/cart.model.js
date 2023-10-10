const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    quantity: {
      type: Number,
      default: 1,
    },
    total_amount: {
      type: Number,
      default: "0",
    },
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
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
