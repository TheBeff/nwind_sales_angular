angular.module('app')
  .config(function($stateProvider ){
  	$stateProvider.state('regionsView', {
  		url: '/regions',
  		templateURL: './region/regions.html'
  	});
  	
  	$stateProvider.state('salesPeopleView', {
  		url: '/salesPeople',
  		templateURL: '/salesPerson/salesPeople.html'
  	});
  	
  	$stateProvider.state('homePage', {
  		url: '/',
  		templateURL: './home.html'
  	});
  });