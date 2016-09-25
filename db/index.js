const Sequelize = require("sequelize");
const db = require('./_db'); 

//make these singular- TODO
const Regions = require('./regions');
const SalesPeople = require('./salesPeople');

function sync(){
	return db.sync();
}

module.exports = {
	db,
	sync,
	models: {
		Regions,
		SalesPeople
	}
};
