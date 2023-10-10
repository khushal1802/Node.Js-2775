const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create order */
router.post(
  "/create",
  // auth(),
  validate(orderValidation.createOrder),
  orderController.createOrder
);

/** Get order list */
router.get("/list", orderController.getOrderList);

/** order details update by id */
router.put("/update/:orderId", orderController.updateOrderDetails);

/** Delete order */
router.delete("/delete/:orderId", orderController.deleteOrder);

module.exports = router;
