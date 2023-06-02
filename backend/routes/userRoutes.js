const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
  sendVerificationMail,
  verifyUserEmail,
} = require("../controllers/userController");

const router = express.Router();

router.get("/user", getUserInfo);
router.get("/user/verify", verifyUserEmail);
router.post("/user/verify", sendVerificationMail);
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

module.exports = router;
