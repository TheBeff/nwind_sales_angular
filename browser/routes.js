angular.module('app')
  .config(function($stateProvider, $urlRouterProvider){
  	$stateProvider.state('regionsView', {
  		url: '/regions',
  		templateUrl: '/region/regions.html',
  		controller: 'RegionsListCtrl'
  	});

  	$stateProvider.state('salesPeopleView', {
  		url: '/salesPeople',
  		templateUrl: '/salesPerson/salesPeople.html',
  		controller: 'SalesPersonCtrl'
  	});
  	
  	$stateProvider.state('homePage', {
  		url: '/',
  		templateUrl: './home.html'
  	});

  	$urlRouterProvider.otherwise('/');
  });