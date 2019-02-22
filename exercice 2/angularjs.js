var App = angular.module('App',[]);
App.controller('voituresCtrl', function($scope,$http){
  // permet d'obtenir ce qui il y a le fichier json "get"  / c'est une liaison
  $http.get('voiture.json')
  // then est une conséquence "quand tu as le json alors tu appliques.... "
  .then(function(response){
    // on va stocker les données "data" dans la variable "voitures"
    $scope.carsArray = response.data;
  });
});
