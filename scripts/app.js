//Define an angular module for our app
var app = angular.module('SleepScoreApp', [
  'ngRoute', //I guess ng-include and the use of views still requires routing even without deeplinking?
  'controllers',
  'ngAnimate'
]);


var controllers = angular.module('controllers', []);