const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello backend test 2",
  });
});

app.listen(3000, (req, res) => {
  console.log("Server running successfully");
});
