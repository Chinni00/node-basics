const express = require('express')
const path = require('path');
const router = express.Router();

// /admin/add-product ==> GET request 
router.get("/add-product", (req, res, next) => {
    console.log("in the middleware");
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
  });

  // /admin/add-product ==> POST request 
  router.post('/add-product',(req,res,next)=>{
      console.log(req.body)
      res.redirect('/')
  });
  module.exports = router;