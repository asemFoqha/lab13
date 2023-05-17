const express = require("express");
const app = express();

const simple = require("./simpleAdder.js");
const { answer } = require("./addmod.js");

app.get("/", function (req, res) {
  simple(req, res);
});

app.get("/add.js", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<!DOCTYPE html>
    <html>
    <head><meta charset=\"utf-8\"/>
    <title>Calculator Web Site</title>
    </head>
    <body>
    <p>The Answer is: ${answer(req, res, req.query)}</p>
    <button onclick="location.assign('/')">Another calculation</button>
    </body>
    </html>`);
  res.end();
});
app.listen(3000);
