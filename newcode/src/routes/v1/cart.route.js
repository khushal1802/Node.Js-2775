const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create cart */
router.post(
  "/create",
  auth(),
  validate(cartValidation.createCart),
  cartController.createCart
);

/** Get cart list */
router.get("/list", cartController.getCartList);

/** cart details update by id */
router.put("/update/:cartId", cartController.updateCartDetails);

/** Delete cart */
router.delete("/delete/:cartId", cartController.deleteCart);

module.exports = router;
