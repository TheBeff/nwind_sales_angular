const db = require('./_db'); 

var Regions = db.define('regions', {
	zip: db.Sequelize.INTEGER
});

module.exports = Regions;
