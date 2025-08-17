const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ result: a + b });
});

module.exports = app;
