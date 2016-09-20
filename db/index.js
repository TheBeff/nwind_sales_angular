const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/acme_angular", {logging: false});

var Regions = db.define('regions', {
	zip: Sequelize.INTEGER
});

var SalesPeople = db.define('salesPeople', {
	name: Sequelize.STRING
});

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