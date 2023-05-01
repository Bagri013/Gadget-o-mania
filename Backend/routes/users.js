var express = require("express");
var router = express.Router();
var User = require("../models/User");

let {
  encryptPassword,
  comparePasswords,
  generateJwt,
} = require("../utils/loginutils");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// User Register API starts here

router.post("/register", async (req, res) => {
  try {
    const userEmailCheck = await User.findOne({
      email: new RegExp(`^${req.body.email}$`, "i"),
    }).exec();

    // console.log(userEmailChk);
    if (userEmailCheck)
    //  throw new Error("Email already registered");
    return res.status(400).send({ message: "Email Already Registered" });

    req.body.password = await encryptPassword(req.body.password);

    let user = await new User(req.body).save();
    res.status(200).json({
      message: "User Register Successfully",
      data: user,
      success: true,
    });

    //   await nodemail('contact@jiorooms.com', req.body.email, 'Registration Successfull', "You have been successfully registered")
    //   res.json({ message: 'User Registered', success: true });
  } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
});

//   User Register API Close

// User Login API Starts Here

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: new RegExp(`^${req.body.email}$`, "i"),
    }).exec();

    if (!user) {
      // throw new Error("You are not registered");
      return res.status(401).json({ message: "Invalid Email" });
    }

    const checkPassword = await comparePasswords(
      req.body.password,
      user.password
    );

    if (!checkPassword)
      // throw new Error("Check Your Credentials");
      return res.status(401).send({ message: "Invalid Password" });

    const token = await generateJwt(User._id);
    // res.json({ message: "Logged In", data: token, success: true });
    res.status(200).send({ data: token, message: "logged in successfully" });
  } 
  catch (err) {
    console.error(err);
    if (err.message)
      // res.json({ message: err.message, data: err, success: false });
      res.status(500).send({ message: "Internal Server Error" });
    else 
    res.json({ message: "Error", data: err, success: false });
  }
});

// User Login Api Ends

// User Reset Password API Starts
router.post("/resetPassword", async (req, res) => {
  try {
    const userEmailCheck = await User.findOne({
      email: new RegExp(`^${req.body.email}$`, "i"),
    }).exec();

    if (!userEmailCheck) throw new Error("Not a user");
    else if (userEmailCheck) {
      req.body.password = await encryptPassword(req.body.password);
      const userEmailForUpdate = await User.findByIdAndUpdate(
        { _id: userEmailCheck._id },
        { $set: { password: req.body.password } },
        { new: true }
      );
      res.json({
        message: "password has been reset",
        data: userEmailForUpdate,
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




// User Reset Password API ends

module.exports = router;
