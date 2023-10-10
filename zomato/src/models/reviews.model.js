const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      trim: true,
    },
    Raiting: {
      type: Number,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
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

const Reviews = mongoose.model("reviews", reviewsSchema);
module.exports = Reviews;
