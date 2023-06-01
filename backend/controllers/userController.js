const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { User } = require("../models/userModel");
const en = require("../utils/constants");
const { isDateValid } = require("../utils/utils");

// @GET
// Get User Info
const getUserInfo = asyncHandler(async (req, res) => {
  const user = await User.findOne({ id: req.body.params }).select("-password");
  if (!user) {
    res.status(404).json({
      message: en.user.notFound,
      status: 404,
    });
    throw new Error(en.user.notFound);
  }
  res.status(200).json({ data: user, status: 200 });
});

// @POST
// Register a new user.
const registerUser = asyncHandler(async (req, res) => {
  const { fName, lName, dob, email, password } = req.body.data;

  if (!fName || !lName || !dob || !email || !password) {
    res.status(400).json({ status: 400, message: en.allFieldsRequired });
    throw new Error(en.allFieldsRequired);
  }

  if (!isDateValid(dob)) {
    res.status(400).json({ status: 400, message: en.invalidDate });
    throw new Error(en.invalidDate);
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ status: 400, message: en.user.alreadyExists });
    throw new Error(en.user.alreadyExists);
  }

  const saltRounds = await bcrypt.genSalt(10);
  const h_password = await bcrypt.hash(password, saltRounds);

  // Create user
  const user = await User.create({
    fName,
    lName,
    dob,
    email,
    password: h_password,
  });

  if (user) {
    //   send verification mail
    sendVerificationMail(req, res);
  } else {
    res.status(400).json({
      status: 400,
      message: en.user.createFail,
    });
    throw new Error(en.user.createFail);
  }
});

// @POST
// Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body.data;

  if (!email || !password) {
    res.json({
      message: en.allFieldsRequired,
      status: 400,
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({
      status: 404,
      message: en.user.notFound,
    });
    throw new Error(en.user.notFound);
  }

  if (await bcrypt.compare(password, user.password)) {
    res.status(200).json({
      data: {
        id: user.id,
        token: generateToken(user.id),
      },
    });
  } else {
    res.status(400).json({
      status: 400,
      message: en.user.incorrectPassword,
    });
    throw new Error(en.user.incorrectPassword);
  }
});

// @GET
// Send verification email
const sendVerificationMail = asyncHandler(async (req, res) => {
  const { email } = req.body.data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const options = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "[Email-Verification] Metamorphix",
    text: `<url-for-UI-that-will-call-verification-api>/?email=${email}`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(en.mailer.failed);
      res.status(400).json({
        status: 400,
        message: en.mailer.failed,
      });
      console.log(err);
      throw new Error(en.mailer.failed);
    } else {
      res.status(200).json({
        status: 400,
        message: en.mailer.success,
        info,
        data: {
          ...req.body?.data,
        },
      });

      console.log(en.mailer.success);
      console.log(info);
    }
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
