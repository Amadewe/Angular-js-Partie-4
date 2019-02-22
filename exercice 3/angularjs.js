var App = angular.module('App',[]);
App.controller('voituresCtrl', function($scope,$http){
  $http.get('voiture.json')
  .then(function(res){
    $scope.carsArray = res.data;
  });
});
