const jwt = require("jsonwebtoken");
const asynHandler = require("express-async-handler");
const User = require("../models/userModel");

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
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ status: 401, message: "Not Authorized." });
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
