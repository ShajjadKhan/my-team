/*
 * Title: Rks team Website
 * Description: RKS Team is a leading provider of innovative and cutting-edge website   and mobile app scripts, dedicated to empowering entrepreneurs, businesses, and    developers worldwide. With a relentless commitment to technological excellence and     client satisfaction, RKS Team has established itself as a go-to destination for     premium-quality scripts tailored to various industry needs.
 * Author: Rks Team
 * Developer: Md Shamim
 */

// Dependencies
const express = require("express");
const cors = require("cors");
const lib = require('./lib/data');
const fs = require('fs')

// app object
const app = express();
// configuration
const config = {
  port: 5000,
};



//use the app object
app.use(express.json());
//cors policy
app.use(cors());

// routes

// user get routes
app.get("/users", (req, res) => {
  lib.read((err,data)=>{
    res.send(JSON.parse(data).users)
  })
});

// user post routes
app.post("/users", (req, res) => {
  const datas = req.body;
  lib.create(datas)
});
// run the
app.listen(config.port, () => {
  console.log(`The Running on port number ${config.port}`);
});
// create
