var Pizzeria = require('../models').Pizzeria;

exports.getPizzerias = (req, res, next) => {
  Pizzeria.findAll()
    .then(pizzerias => {
      if (pizzerias) {
        res.status(200).send({ status: "success", data: pizzerias })
      } else {
        res.status(404).send({ error: "not found" })
      }
    })
}

exports.getPizzeria = (req, res, next) => {
  Pizzeria.findById(req.params.id)
    .then(pizzeria => {
      if (pizzeria) {
        res.status(200).send({ status: "success", data: pizzeria })
      } else {
        res.status(404).send({ error: "not found" })
      }
    })
}

exports.putPizzeria = (req, res, next) => {
  Pizzeria.upsert({
    name: req.body.name,
    notes: req.body.notes
  }).then(success => {
    if (success) {
      res.status(200).send({ status: "created" })
    } else {
      res.status(200).send({ status: "updated" })
    }
  })
}

exports.deletePizzeria = (req, res, next) => {
  Pizzeria.findById(req.params.id)
    .then(pizzeria => pizzeria.destroy())
    .then(deletedRows => {
      if (deletedRows > 0) {
        res.status(200).send({ status: "success", deleted: deletedRows })
      } else {
        res.status(404).send({ error: "not found" })
      }
    })
}