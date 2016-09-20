angular.module('app')
  .controller('RegionsListCtrl', function($scope, $log, RegionService){
  	
  	$scope.create = function(){
  		RegionService.create({zip: $scope.zip})
  		  .then(function(response){
  		  	$scope.zip = '';
  		  })
  		  .catch($log.error);
  	};

  	RegionService.getAll()
  	  .then(function(result){
  	  	$scope.regions = result;
  	  	console.log($scope.regions);
  	  })
  	  .catch($log.error);
  });
