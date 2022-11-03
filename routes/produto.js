const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Listagem de produtos");
});

router.post("/", function (req, res) {
  console.log(req.body);
  res.send("Criação de produtos");
});

router.put("/", function (req, res) {
  res.send("Atualização de produtos");
});

module.exports = router;
