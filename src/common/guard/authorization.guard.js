const createHttpError = require("http-errors");
const AuthorizationMessage = require("../messages/auth.message");
const jwt = require("jsonwebtoken");
const UserModel = require("../../modules/user/user.model");
require("dotenv").config();

const Authorization = async (req, res, next) => {
  try {
    const token = req?.cookies?.access_token;
    if (!token)
      throw new createHttpError.Unauthorized(AuthorizationMessage.Login);
    const data = jwt.verify(token,process.env.JWT_SECRET_KEY);
    if(data?.id){
        const user =await UserModel.findById(data.id,{otp : 0,accessToken: 0,__v : 0 ,updatedAt:0,verifiedMobile:0}).lean();
        if(!user) 
            throw new createHttpError.Unauthorized(AuthorizationMessage.NotFoundAccount);
        req.user = user;
        return next();
    }
    throw new createHttpError.Unauthorized(AuthorizationMessage.InvaliedToken)
  } catch (error) {
    next(error);
  }
};

module.exports = Authorization;