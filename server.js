const server = require('http').createServer(require('./app'));
const db = require('./db/index');

if(process.env.SYNC){
  db.sync()
    .then(function(){
      console.log('tables created');
    });
}
  
const port = process.env.PORT || 3000;
server.listen(port, function(){
	console.log("Listening on port: " + port);
});
