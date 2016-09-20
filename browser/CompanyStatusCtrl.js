angular.module('app')
  .controller('CompanyStatusCtrl', function($scope, $log, RegionService, SalesPersonService){
  	
	RegionService.getAll()
	  .then(function(result){
	  	$scope.numRegions = result.length;
	  	console.log($scope.numRegions);
	  })
	  .catch($log.error);

	// SalesPersonService.getAll()
	//   .then()

  });