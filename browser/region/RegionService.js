angular.module('app')
  .factory('RegionService', function($http){
  	
  	var RegionService = {};
  	var _regions = [];
  	
  	RegionService.create = function(zip){
  		return $http.post('/api/regions', zip)
  		  .then(function(response){
  		  	_regions.push(response.data);
  		  });
  	};

  	RegionService.getAll = function(){
  		return $http.get('/api/regions')
  		  .then(function(response){ 
  		  	angular.copy(response.data, _regions);
  		  	return _regions; 
  		  });
  	};

  	RegionService.destroy = function(region){
  		return $http.delete('/api/regions/' + region.id)
  		  .then(function(response){
  		  	_regions.splice(_regions.indexOf(region), 1);
  		  });
  	};
  	
  	return RegionService;
  });
