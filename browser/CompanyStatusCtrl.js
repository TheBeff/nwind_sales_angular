angular.module('app')
  .controller('CompanyStatusCtrl', function($scope, $log, SalesPersonService, RegionService){
    SalesPersonService.getAll()
      .then(function(salesPeople){
        $scope.salesPeople = salesPeople;
      })
      .catch(function(err){
        console.log(err);
      });
    RegionService.getAll()
      .then(function(regions){
        $scope.regions = regions;
      })
      .catch(function(err){
        console.log(err);
      });
  });
