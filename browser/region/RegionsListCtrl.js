angular.module('app')
  .controller('RegionsListCtrl', function($scope, $log, RegionService){
  	
  	$scope.create = function(){
  		RegionService.create({zip: $scope.zip})
  		  .then(function(response){
  		  	$scope.zip = '';
  		  })
  		  .catch($log.error);
  	};

  	$scope.destroy = function(region){
  		RegionService.destroy(region)
  		  .then(function(response){
  		  	console.log('region has poofed');
  		  })
  		  .catch($log.error);
  	};

  	RegionService.getAll()
  	  .then(function(result){
  	  	$scope.regions = result;
  	  })
  	  .catch($log.error);
  });
