const { Router } = require("express");
const authController = require("./auth.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();
router.post("/send-OTP",authController.sendOTP)
router.post("/check-OTP",authController.checkOTP)
router.get("/logout",Authorization,authController.logout)
module.exports ={
    AuthRouter : router 
}