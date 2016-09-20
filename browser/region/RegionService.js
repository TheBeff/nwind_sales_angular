angular.module('app')
  .factory('RegionService', function($http){
  	
  	var RegionService = {};
  	var _regions = [];
  	
  	RegionService.create = function(zip){
  		return $http.post('/api/regions', zip)
  		  .then(function(response){
  		  	_regions.push(response.data);
  		  })
  	};

  	RegionService.getAll = function(){
  		return $http.get('/api/regions')
  		  .then(function(response){ 
  		  	angular.copy(response.data, _regions)
  		  	return _regions; 
  		  });
  	};
  	
  	return RegionService;
  });