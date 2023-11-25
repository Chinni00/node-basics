const http = require("http");
const express = require("express");
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();
const parser = require("body-parser");
app.use(parser.urlencoded({extended:true}));
app.use(adminRoutes);
app.use(shopRoutes)
app.use((req,res,next)=>{
    res.status(404).send('<center><h1>Page Not Found</h1></center>')
})


app.listen(3000);
