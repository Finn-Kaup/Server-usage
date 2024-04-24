const express = require("express");
const app = express();
const os = require("os");
const fs = require("fs");


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/get", (req ,res) => {
    let data = {
        "totalmem": os.totalmem(),
        "freemem": os.freemem(),
        "version": os.version(),
        "networkInterfaces": os.networkInterfaces(),
        "cpus": os.cpus()
    };
    res.json(data);
});


//app.use(express.json());

app.use(express.static("public"));

app.listen(5000);