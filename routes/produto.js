const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Listagem de produtos");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send("Criação de produtos");
});

router.put("/:id", function (req, res) {
  console.log("Identificação do Produto", req.params.id);
  console.log("Corpo da requisição", req.body);
  res.send("Atualização de produtos");
});

router.delete("/:id", function (req, res) {
  console.log("Identificação do Produto", req.params.id);
  res.send("Exclusão de produtos");
});

module.exports = router;
