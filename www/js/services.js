angular.module('app.services', [])

.factory('Api', function($q, $http) {
   return{

     getAlerts: function() {
       var promessa = $q.defer();

       $http.jsonp('http://localhost:3000/alerts').then(
       		function(result){
       			console.log(result)
       		}

       	);
       return promessa.promise;
     },

     addUser: function(usuario){
     	return $http.put("http://localhost:3000/users", usuario);
     } 

   }
}) 

.service('BlankService', [function(){

}]);


