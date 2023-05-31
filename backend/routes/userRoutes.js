const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/userController");

const router = express.Router();

router.get("/user/:userId", getUserInfo);
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);

module.exports = router;
