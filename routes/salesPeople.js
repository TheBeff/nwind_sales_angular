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

module.exports = router;