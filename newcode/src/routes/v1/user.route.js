const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
  "/create",
  validate(userValidation.createUser),
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  userController.getUserList
);

/** Get user details by id */
router.get(
  "/get-details/:userId",
  userController.getUserDetails
);

/** user details update by id */
router.put(
  "/update/:userId",
  userController.updateUserDetails
);

/** Delete user */
router.delete(
  "/delete/:userId",
  userController.deleteUser
);


module.exports = router;