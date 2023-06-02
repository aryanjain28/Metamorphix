const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
  sendVerificationMail,
  verifyUserEmail,
} = require("../controllers/userController");
const { authorized } = require("../middlewares/authorizationMiddleware");

const router = express.Router();

// No authorization required.
router.get("/user/verify", verifyUserEmail);
router.post("/user/verify", sendVerificationMail);
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

// Authorization required; to access data.
router.get("/user", authorized, getUserInfo);

module.exports = router;
