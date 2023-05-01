var express = require("express");
var router = express.Router();

var Product = require("../models/Product");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/addProduct", async (req, res) => {
  try {
    const proid = await Product.findOne({ proid: req.body.proid }).exec();

    const proname = await Product.findOne({ proname: req.body.proname }).exec();
    if (proid)
      return res.status(401).json({ message: "Product already exist" });
    else if (proname)
      return res.status(401).json({ message: "Product already exist" });

    let product = await new Product(req.body).save();
    res.status(200).json({
      message: "Product added Successfully",
      data: product,
      success: true,
    });
  } catch (err) {
    console.error(err);
    if (err.message)
      res.json({ message: err.message, data: err, success: false });
    else res.json({ message: "Error", data: err, success: false });
  }
});

router.post("/updateProduct", async (req, res) => {
  try {
    const product = await Product.findOne({ proid: req.body.proid }).exec();

    if (!product) return res.status(401).json({ message: "No Product" });
    else if (product) {
      const productUpdate = await Product.findByIdAndUpdate(
        { _id: product._id },
        {
          $set: {
            // proid: req.body.proid,
            proname: req.body.proname,
            proimage: req.body.proimage,
            proprice: req.body.proprice,
            // procategory: req.body.procategory,
            // prodetail: req.body.prodetail,
          },
        },
        { new: true }
      );
      res.json({
        message: "Product Successfully Updated",
        data: productUpdate,
        success: true,
      });
    }
  } catch (err) {
    res.json({ message: err.message, success: false });
  }
});

router.post("/deleteProduct", async (req, res) => {
  try {
    const product = await Product.findOne({ proid: req.body.proid }).exec();

    if (!product) throw new Error("No Product");
    else if (product) {
      const productDelete = await Product.findByIdAndDelete({ _id: product._id });
      res.json({
        message: "Product Successfully deleted",
        data: productDelete,
        success: true,
      });
    }
  } catch (err) {
    res.json({ message: err.message, success: false });
  }
});

router.get('/apidata/product/laptop', async (req, res) => {
  try {
    Product.find({procategory:"Laptop"}, (err, data) => {
          if(err) throw err;
          res.send(data);
          // console.log(data);
      })
  }
  catch (err){
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });
      else
          res.json({ message: 'Error', data: err, success: false });
  }
});
router.get('/apidata/product/mobile', async (req, res) => {
  try {
    Product.find({procategory:"Mobile"}, (err, data) => {
          if(err) throw err;
          res.send(data);
          // console.log(data);
      })
  }
  catch (err){
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });
      else
          res.json({ message: 'Error', data: err, success: false });
  }
});
router.get('/apidata/product/camera', async (req, res) => {
  try {
    Product.find({procategory:"Camera"}, (err, data) => {
          if(err) throw err;
          res.send(data);
          // console.log(data);
      })
  }
  catch (err){
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });
      else
          res.json({ message: 'Error', data: err, success: false });
  }
});
router.get('/apidata/product/gaming', async (req, res) => {
  try {
    Product.find({procategory:"GamingAccessories"}, (err, data) => {
          if(err) throw err;
          res.send(data);
          // console.log(data);
      })
  }
  catch (err){
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });
      else
          res.json({ message: 'Error', data: err, success: false });
  }
});
router.get('/apidata/product/watch', async (req, res) => {
  try {
    Product.find({procategory:"SmartWatches"}, (err, data) => {
          if(err) throw err;
          res.send(data);
          // console.log(data);
      })
  }
  catch (err){
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });
      else
          res.json({ message: 'Error', data: err, success: false });
  }
});
router.get('/apidata/product/headset', async (req, res) => {
  try {
    Product.find({procategory:"Headset/Airpods"}, (err, data) => {
          if(err) throw err;
          res.send(data);
          // console.log(data);
      })
  }
  catch (err){
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });
      else
          res.json({ message: 'Error', data: err, success: false });
  }
});
router.get('/apidata/product/speaker', async (req, res) => {
  try {
    Product.find({procategory:"Speakers"}, (err, data) => {
          if(err) throw err;
          res.send(data);
          // console.log(data);
      })
  }
  catch (err){
      console.error(err);
      if (err.message)
          res.json({ message: err.message, data: err, success: false });
      else
          res.json({ message: 'Error', data: err, success: false });
  }
});


module.exports = router;
