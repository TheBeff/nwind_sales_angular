var router = require('express').Router();
var salesPeople = require('../db/index.js').models.SalesPeople;

router.post('/', function(req, res, next){
	salesPeople.create({name: req.body.name})
	  .then(function(result){
	  	res.send(result);
	  })
	  .catch(next);
});

router.get('/', function(req, res, next){
	salesPeople.findAll({where: {}})
	  .then(function(result){
	  	res.send(result);
	  })
	  .catch(next);
});

router.delete('/:id', function(req, res, next){
	salesPeople.destroy({where: {id: req.params.id}})
	  .then(function(result){
	  	console.log("Sales person GONE");
	  	res.sendStatus(204);
	  })
	  .catch(next);
});

module.exports = router;