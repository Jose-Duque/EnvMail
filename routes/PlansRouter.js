const express = require("express");
const router = express.Router();  //Criação de rotas
const PlansController = require("../controllers/PlansController");

router.get("/admin/plans", PlansController.index);

router.get("/admin/plans/create",PlansController.create);

router.post("/plans/loja", PlansController.loja)

router.get("/admin/plans/edit/:id",PlansController.edit);

router.post("/plans/updade", PlansController.update);

router.get("/plans/desativado/:id", PlansController.desativado);

router.get("/plans/ativo/:id", PlansController.ativo)

module.exports = router;