const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Realestate Backend server By Deepak");
});

app.get("*", (req, res) => {
    res.status(400).json({
        status:"Failed",
        message:"Invalid request"
    });
});

app.listen(3000,()=>console.log("Listening to server at port 3000"))


