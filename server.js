const server = require('http').createServer(require('./app'));
const db = require('./db/index');

db.sync()
  .then(function(){
  	console.log('tables created')
  });
  
server.listen(process.env.PORT, function(){
	console.log("Listening on port: " + process.env.PORT);
});