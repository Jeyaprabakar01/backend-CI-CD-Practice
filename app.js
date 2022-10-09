const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hello backend",
  });
});

app.listen(3000, (req, res) => {
  console.log("Server running successfully");
});
