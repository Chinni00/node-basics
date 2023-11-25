const http = require("http");
const express = require("express");
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();
const parser = require("body-parser");
app.use(parser.urlencoded({extended:true}));
app.use(adminRoutes);
app.use(shopRoutes)


app.listen(3000);
