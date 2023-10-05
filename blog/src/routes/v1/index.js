const express=require("express")
const userRoute=require("./user.route");
const blogRoute =require("./blog.route");
const tokenRoute=require("./token.route");

const router =express.Router();

router.use("/user",userRoute);
router.use("/blog", blogRoute);
router.use("/token", tokenRoute);

module.exports=router;