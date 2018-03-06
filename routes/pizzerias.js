var express = require('express');
var router = express.Router();

var pizzeriaController = require('../controllers/pizzeriaController');

router.get(
  '/pizzerias',
  pizzeriaController.getPizzerias
)

router.get(
  '/pizzerias/:id',
  pizzeriaController.getPizzeria
)

router.put(
  '/pizzerias',
  pizzeriaController.putPizzeria
)

router.delete(
  '/pizzerias/:id',
  pizzeriaController.deletePizzeria
)

module.exports = router;
