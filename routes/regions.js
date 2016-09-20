var router = require('express').Router();
var Region = require('../db/index.js').models.Regions;

router.post('/', function(req, res, next){
	console.log(req.body);
	Region.create({
		zip: req.body.zip
	})
	  .then(function(result){
	  	res.send(result);
	  })
	  .catch(next);
});

router.get('/', function(req,res,next){
	Region.findAll({
		where: {}
	})
	  .then(function(result){
	  	res.send(result);
	  })
	  .catch(next);
});

module.exports = router;

