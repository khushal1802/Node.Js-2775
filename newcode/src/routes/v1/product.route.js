const express = require("express");
const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create-product",
  auth(),
  upload.single("product_image"),
  validate(productValidation.createProduct),
  productController.createProduct
);

router.get("/list", productController.getProductList);

router.get("/details/:productId", productController.getDetails);

router.put(
  "/update/:productId",
  auth(),
  upload.single("product_image"),
  productController.updateProduct
);

router.put(
  "/manage-status/:productId",
  auth(),
  productController.manageProductStatus
);

router.delete("/delete/:productId", auth(), productController.deleteProduct);

module.exports = router;
