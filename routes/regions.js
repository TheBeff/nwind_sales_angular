var router = require('express').Router();
var Region = require('../db/index.js').models.Regions;

router.post('/', function(req, res, next){
	Region.create({zip: req.body.zip})
	  .then(function(result){
	  	res.send(result);
	  })
	  .catch(next);
});

router.get('/', function(req, res, next){
	Region.findAll({where: {}})
	  .then(function(result){
	  	res.send(result);
	  })
	  .catch(next);
});

router.delete('/:id', function(req, res, next){
	Region.destroy({where: {id: req.params.id}})
	.then(function(result){
		console.log('region deleted on server');
		res.sendStatus(204);
	})
	.catch(next);
});

module.exports = router;