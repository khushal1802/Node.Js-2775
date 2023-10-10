const express = require("express");
const userRoute = require("./user.route");
const tokenRoute = require("./token.route");
const countryRoute = require("./country.route");
const stateRoute = require("./state.route");
const cityRoute = require("./city.route");
const bannerRoute = require("./banner.route");
const foodRoute = require("./food.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/token", tokenRoute);
router.use("/country", countryRoute);
router.use("/state", stateRoute);
router.use("/city", cityRoute);
router.use("/banner", bannerRoute);
router.use("/food", foodRoute);

module.exports = router;
