var app = angular.module('myApp',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider)
{
  $stateProvider
  .state('register',
  {
    url : '/register',
    templateUrl : 'templates/register.html',
    controller : 'registercontroller'
  })

  .state('login',
{
  url : '/login',
  templateUrl : 'templates/Login.html',
  controller : 'logincontroller'
})
  .state('calculate',
  {
  url : '/calculate',
  templateUrl : 'templates/Calculator.html',
  controller : 'calcCtrl'
  });
  $urlRouterProvider.otherwise('/register');
}]);
