const express = require("express");

const app = express();

app.get("", (req, res) => {
  return res.json({
    message: "Hello world",
  });
});

app.get("/teste", (req, res) => {
  return res.json({
    message: "Função de teste",
  });
});

module.exports = app;
