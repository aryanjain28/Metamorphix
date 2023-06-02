const jwt = require("jsonwebtoken");
const asynHandler = require("express-async-handler");
const { User } = require("../models/userModel");
const en = require("../utils/constants");

const authorized = asynHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ _id: decoded.id }).select("-password");

      if (!user) {
        res.status(404).json({
          message: en.user.notFound,
          status: 404,
        });
        throw new Error(en.user.notFound);
      }

      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json({ status: 401, details: { error }, message: "Not Authorized." });
      throw new Error("Not Authorized");
    }
  }

  if (!token) {
    res
      .status(401)
      .json({ status: 401, message: "Not Authorized, no token provided." });
    throw new Error("Not Authorized, no token provided.");
  }
});

module.exports = { authorized };
