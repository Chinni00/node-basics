const express = require('express')
const router = express.Router();

// /admin/add-product ==> GET request 
router.get("/add-product", (req, res, next) => {
    console.log("in the middleware");
    res.send(
      '<form action="/admin/add-product" method="POST"><input name="title" /><input name="age" /> <button type="submit">add</button></form>'
    );
  });

  // /admin/add-product ==> POST request 
  router.post('/add-product',(req,res,next)=>{
      console.log(req.body)
      res.redirect('/')
  });
  module.exports = router;