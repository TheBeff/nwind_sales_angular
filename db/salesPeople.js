const db = require('./_db'); 

var SalesPeople = db.define('salesPeople', {
	name: db.Sequelize.STRING
});

module.exports = SalesPeople;
