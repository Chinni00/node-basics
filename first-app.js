const http = require("http");
const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.urlencoded());
app.use("/add-product", (req, res, next) => {
  console.log("in the middleware");
  res.send(
    '<form action="/product" method="POST"><input name="title" /> <button type="submit">add</button></form>'
  );
});
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
});
app.use('/',(req,res,next)=>{
    res.send('hello welcome')
})

app.listen(3000);
