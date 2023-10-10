const { Food } = require("../models");

const getFoodList = async (req, res) => {
  return Food.find();
};

const createFood = async (reqBody) => {
  return Food.create(reqBody);
};

const updateFood = async (foodId, reqBody) => {
  return Food.findOneAndUpdate(
    { _id: foodId },
    { $set: reqBody },
    { new: true }
  );
};

const manageFoodStatus = async (foodId) => {
  const FoodExists = await getFoodById(foodId);
  if (!FoodExists) {
    throw new Error("Food not found!");
  }
  return Food.findOneAndUpdate(
    { _id: foodId },
    {
      $set: {
        is_active: !FoodExists.is_active,
      },
    },
    { new: true }
  );
};

const deleteFood = async (foodId) => {
  return Food.findOneAndDelete({ _id: foodId });
};

module.exports = {
  createFood,
  getFoodList,
  updateFood,
  manageFoodStatus,
  deleteFood,
};
