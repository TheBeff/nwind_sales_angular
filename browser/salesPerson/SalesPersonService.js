angular.module('app')
  .factory('SalesPersonService', function($http){

  	var SalesPersonService = {}
  	var _salesPeople = [];

  	SalesPersonService.create = function(name){
  		return $http.post('/api/salesPeople', name)
  		  .then(function(response){
  		  	_salesPeople.push(response.data);
  		  });
  	};

  	SalesPersonService.getAll = function(){
  		return $http.get('/api/salesPeople')
  		  .then(function(response){
  		  	angular.copy(response.data, _salesPeople);
  		  	return _salesPeople;
  		  });
  	};

  	SalesPersonService.destroy = function(salesPerson){
  		return $http.delete('/api/salesPeople/' + salesPerson.id)
  		  .then(function(response){
  		  	_salesPeople.splice(_salesPeople.indexOf(salesPerson), 1);
  		  })
  	};

  	return SalesPersonService;
  });