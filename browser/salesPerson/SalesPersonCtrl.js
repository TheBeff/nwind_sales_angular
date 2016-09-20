angular.module('app')
  .controller('SalesPersonCtrl', function($scope, $log, SalesPersonService){

  	$scope.create = function(){
  		SalesPersonService.create({name: $scope.name})
  		  .then(function(result){
  		  	$scope.name = '';
  		  })
  		  .catch($log.error);
  	};

  	$scope.destroy = function(salesPerson){
  		SalesPersonService.destroy(salesPerson)
  		  .then(function(result){
  		  	console.log("Sales person deleted");
  		  })
  		  .catch($log.error);
  	};

  	SalesPersonService.getAll()
  	  .then(function(result){
  	  	$scope.salesPeople = result;
  	  })
  	  .catch($log.error);

  });