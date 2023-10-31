const express = require("express");
const fs = require("fs");

//setting up the express router
const app = express();

app.use(express.json());

//write the code for routes here

app.get("/view", (req, res) => {
  const id = req.query.id ?? "";
  fs.readFile("./get.json", (err, data) => {
    if (err) throw err;
    if (id === "") {
      res.status(200).json(JSON.parse(data));
    } else {
      const flt = JSON.parse(data).filter((item) => item.id === id);
      res.status(200).json(flt);
    }
  });
});

module.exports = app;
