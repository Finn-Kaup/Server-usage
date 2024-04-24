const express = require("express");
const app = express();
const os = require("os");
const fs = require("fs");


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


//app.use(express.json());

app.use(express.static("public"));

app.listen(3000);