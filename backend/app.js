const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({ result: a + b});
});

// app.get("/concat", (req, res) => {
//   const a = parseInt(req.query.a);
//   const b = parseInt(req.query.b);
//   res.json({ result: brokenSum(a,b)});
// });

// function sum(a, b) {
//   return a + b
// }

// function brokenSum(a, b) {
//   // BUG: Concatenates strings
//   return a + "" + b;
// }

// function helperOne() {
//   console.log('this is helper one but not doing anything :p')
// }

// module.exports = { app, brokenSum };

module.exports = app;