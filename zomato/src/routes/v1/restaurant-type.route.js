const express = require("express");
const { restaurantTypeValidation } = require("../../validations");
const { restaurantTypeController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create restaurantType
router.post(
  "/create-restaurantType",
  validate(restaurantTypeValidation.createrestaurantType),
  restaurantTypeController.createrestaurantType
);

// List restaurantType
router.get("/list", restaurantTypeController.getRestaurantTypeList);

// Update restaurantType
router.put(
  "/update-restaurantType/:id",
  restaurantTypeController.updaterestaurantType
);

// Delete restaurantType
router.delete(
  "/delete-restaurantType/:Id",
  restaurantTypeController.deleterestaurantType
);

module.exports = router;
