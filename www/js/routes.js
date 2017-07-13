angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
      .state('tabsController.inicio', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('tabsController.mapa', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      }
    }
  })

  .state('cadastro', {
    url: '/page4',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('enviarAlerta', {
    url: '/page6',
    templateUrl: 'templates/enviarAlerta.html',
    controller: 'enviarAlertaCtrl'
  })

  .state('tabsController.histRico', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/histRico.html',
        controller: 'histRicoCtrl'
      }
    }
  })

  .state('configuraEs', {
    url: '/page8',
    templateUrl: 'templates/configuraEs.html',
    controller: 'configuraEsCtrl'
  })

  .state('sobre', {
    url: '/page9',
    templateUrl: 'templates/sobre.html',
    controller: 'sobreCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.alertaDetalhado'
      2) Using $state.go programatically:
        $state.go('tabsController.alertaDetalhado');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab2/page10
      /page1/tab3/page10
  */
  .state('tabsController.alertaDetalhado', {
    url: '/page10/:idAlert',
    views: {
      'tab1': {
        templateUrl: 'templates/alertaDetalhado.html',
        controller: 'alertaDetalhadoCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.fotoDoAlerta'
      2) Using $state.go programatically:
        $state.go('tabsController.fotoDoAlerta');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab2/page11
      /page1/tab3/page11
  */
  .state('tabsController.fotoDoAlerta', {
    url: '/page11/:idAlert',
    views: {
      'tab1': {
        templateUrl: 'templates/fotoDoAlerta.html',
        controller: 'fotoDoAlertaCtrl'
      }
    }
  })

  //Parte da notificação também
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  });
  //Fim do notficação


$urlRouterProvider.otherwise('/page1/page2')

  

});