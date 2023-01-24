const express = require("express");

const app = express();

const port = 8000;

app.use("/uploads", express.static(__dirname + "/uploads"));


const path = require("path")

app.use("/",require("./routes"))


app.listen(port, (err) => {
    console.log("app is running on port", port)
})