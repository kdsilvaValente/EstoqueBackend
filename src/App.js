const express = require("express");

const app = express();

app.get("", (req, res) => {
  return res.json({
    message: "Hello world",
  });
});

app.get("/cadastro", (req, res) => {
  return res.json({
    message: "Função de cadastro",
  });
});

app.listen(8000, () => console.log("Servidor Rodando"));
