const express = require("express");
const app = express();
const produto = require("./routes/produto");

app.use(express.json());

app.use("/produto", produto);

app.get("/bemvindo/:nome/:sobrenome?", function (req, res) {
  res.send(
    "Bem vindo a nossa API! " + req.params.nome + " " + req.params.sobrenome
  );
});

app.get("/produtos", function (req, res) {
  res.send([{ id: 1, nome: "Notebook", preco: 3000 }]);
});

app.put("/produtos", function (req, res) {
  res.send("Recebido com sucesso!");
});

app.listen(3000, function () {
  console.log("Aplicação rodando na porta 3000");
});
