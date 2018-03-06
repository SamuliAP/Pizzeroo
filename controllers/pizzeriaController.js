var Pizzeria = require('../models').Pizzeria;

exports.getPizzerias = (req, res, next) => {
  Pizzeria.findAll()
  .then(pizzerias => res.status(200).send(pizzerias))
}

exports.getPizzeria = (req, res, next) => {
  Pizzeria.findById(req.params.id)
  .then(pizzeria => res.status(200).send(pizzeria))
}

exports.putPizzeria = (req, res, next) => {
  Pizzeria.upsert({
    name: req.body.name, 
    notes: req.body.notes
  }).then(success => {
    if(success) res.status(200).send("created")
    else res.status(200).send("updated")
  })
}

exports.deletePizzeria = (req, res, next) => {
  Pizzeria.findById(req.params.id)
  .then(pizzeria => pizzeria.destroy())
  .then(() => res.status(200).send())
}