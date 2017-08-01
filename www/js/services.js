angular.module('app.services', ['firebase'])

.factory('Auth', Auth)

.factory('Api', function($q, $http) {
  return{


     getAlerts: function() {
       var promessa = $q.defer();

       $http.jsonp('https://safe-mountain-31492.herokuapp.com/', {jsonpCallbackParam: 'callback'}).then(
       		function(result){
       			console.log(result)
       		}

       	);
       return promessa.promise;
     }, 

     addUser: function(usuario){
     	return $http.post('https://safe-mountain-31492.herokuapp.com/', usuario);
     } 
  }
}) 

 .factory('Itens',[
   '$firebaseArray','$firebaseObject',
   function($firebaseArray, $firebaseObject) {
     return {
      //retorna la referencia a la base de datos 'todos'
      allRef: function(){
        return new Firebase('https://sistemadealertaprmr.firebaseio.com/');
      },
      //La referencia la retorna como un array de firebase
      todos: function(){
        return $firebaseArray(this.allRef());
      },
      //retorna la referencia  a un objeto 'todo'
      getRef: function(id){
        return new Firebase('https://sistemadealertaprmr.firebaseio.com/' + id);
      },
      //La referencia la retorna como un objeto de firebase
      obter: function(id){
        return $firebaseObject(this.getRef(id));
      }
    };
   }
 ])



.service('Alert', [function(){

var list = [
  {
    "id": 5,
    "type_alert": 2,
    "title": "Ponte Interditada",
    "last_description": "Estrada rural interditada ",
    "penultimate_description": "Rua Joaquim alagada",
    "antepenultimate_description": "Rio Subindo rápido",
    "date_hour": "09/07/2017 - 17:57 h",
    "url_img": "img/thumbnailAmarelo.jpg",
    "photo": "http://res.cloudinary.com/dht8hrgql/image/upload/v1499814594/ImagensAlertas/5.jpg"
  },
  {
    "id": 2,
    "type_alert": 2,
    "title": "Desmoronamento",
    "last_description": "Rua Brasil interditada",
    "penultimate_description": "",
    "antepenultimate_description": "",
    "date_hour": "10/05/2017 - 19:58 h",
    "url_img": "img/thumbnailAmarelo.jpg",
    "photo": "http://res.cloudinary.com/dht8hrgql/image/upload/v1499814587/ImagensAlertas/2.jpg"
  },
  {
    "id": 3,
    "type_alert": 1,
    "title": "Enchente",
    "last_description": "Moradores deixar suas casas",
    "penultimate_description": "",
    "antepenultimate_description": "",
    "date_hour": "10/05/2017 - 20:00 h",
    "url_img": "img/thumbnailVermelho.jpg",
    "photo": "http://res.cloudinary.com/dht8hrgql/image/upload/v1499814594/ImagensAlertas/3.jpg"
  },
  {
    "id": 4,
    "type_alert": 2,
    "title": "Cheia de Rio",
    "last_description": "Rua Brasil interditada ",
    "penultimate_description": "Rua Joaquim alagada",
    "antepenultimate_description": "Rio Subindo rápido",
    "date_hour": "02/06/2017 - 17:26 h",
    "url_img": "img/thumbnailAmarelo.jpg",
    "photo": "http://res.cloudinary.com/dht8hrgql/image/upload/v1499814594/ImagensAlertas/4.jpg"
  },  
  {
    "id": 1,
    "type_alert": 3,
    "title": "Arvore Caída",
    "last_description": "Bombeiros trabalhando para desobstruir avenida ",
    "penultimate_description": "Árvore caída da Avenida Central",
    "antepenultimate_description": "",
    "date_hour": "02/06/2017 - 17:39 h",
    "url_img": "img/thumbnailVerde.jpg",
    "photo": "http://res.cloudinary.com/dht8hrgql/image/upload/v1499814465/ImagensAlertas/1.jpg"
  }
];

return {
  all: function(){
    return list;
  },
  get: function(idAlert) {
    for (var i = 0; i < list.length; i++){
      if(list[i].id === parseInt(idAlert)){
        return list[i];
      }
    }
      return null;
  },
  last: function(){
    for (var i = 0; i < list.length; i++){
      if(list[i].id > list[i+1].id){
        return list[i];
      }
    }
  }
}


}]);//original

function Auth(rootRef, $firebaseAuth) {
  return $firebaseAuth(rootRef);
}
Auth.$inject = ['rootRef', '$firebaseAuth'];

