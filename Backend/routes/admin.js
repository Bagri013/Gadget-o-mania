var express = require("express");
var router = express.Router();
var Admin = require("../models/Admin");

let {
  encryptPassword,
  comparePasswords,
  generateJwt,
} = require("../utils/loginutils");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Admin Register API starts here

router.post("/register", async (req, res) => {
  try {
    const adminEmailCheck = await Admin.findOne({
      email: new RegExp(`^${req.body.email}$`, "i"),
    }).exec();

    // console.log(adminEmailChk);
    if (adminEmailCheck)
      //  throw new Error("Email already registered");
      return res.status(400).send({ message: "Email Already Registered" });

    req.body.password = await encryptPassword(req.body.password);

    let admin = await new Admin(req.body).save();
    res.status(200).json({
      message: "Admin Register Successfully",
      data: admin,
      success: true,
    });

    //   await nodemail('contact@jiorooms.com', req.body.email, 'Registration Successfull', "You have been successfully registered")
    //   res.json({ message: 'Admin Registered', success: true });
  } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
});

//   Admin Register API Close

// Admin Login API Starts Here

router.post("/login", async (req, res) => {
  try {
    const admin = await Admin.findOne({
      email: new RegExp(`^${req.body.email}$`, "i"),
    }).exec();

    if (!admin) {
      // throw new Error("You are not registered");
      return res.status(401).json({ message: "Invalid Email" });
    }

    const checkPassword = await comparePasswords(
      req.body.password,
      admin.password
    );

    if (!checkPassword)
      //  throw new Error("Check Your Credentials");
      return res.status(401).send({ message: "Invalid Password" });

    const token = await generateJwt(Admin._id);
    // res.json({ message: "Logged In", data: token, success: true });
    res.status(200).send({ data: token, message: "logged in successfully" });
  } catch (err) {
    console.error(err);
    if (err.message)
      // res.json({ message: err.message, data: err, success: false });
      res.status(500).send({ message: "Internal Server Error" });
    else res.json({ message: "Error", data: err, success: false });
  }
});

// Admin Login Api Ends

// Admin Reset Password API Starts
router.post("/resetPassword", async (req, res) => {
  try {
    const adminEmailCheck = await Admin.findOne({
      email: new RegExp(`^${req.body.email}$`, "i"),
    }).exec();

    if (!adminEmailCheck) throw new Error("Not a user");
    else if (adminEmailCheck) {
      req.body.password = await encryptPassword(req.body.password);
      const adminEmailForUpdate = await Admin.findByIdAndUpdate(
        { _id: adminEmailCheck._id },
        { $set: { password: req.body.password } },
        { new: true }
      );
      res.json({
        message: "password has been reset",
        data: adminEmailForUpdate,
        success: true,
      });
    }
  } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
});
// Admin Reset Password API ends

module.exports = router;
