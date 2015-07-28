
'use strict';

/* App Module */

var liveAgentSFDC = angular.module('liveAgentSFDC', [
  'ngRoute',
  'liveAgentSFDCControllers'
]);

liveAgentSFDC.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/view1', {
    	templateUrl: 'views/view1.html',
    	controller: 'view1Ctrl'
    }). when('/view2', {
    	templateUrl: 'views/view2.html',
    	controller: 'view2Ctrl'
    }).
    otherwise({
        redirectTo: '/index'
      });
  }]);

var liveAgentSFDCControllers = angular.module('liveAgentSFDCControllers', []);

liveAgentSFDCControllers.controller('view1Ctrl', ['$scope','$routeParams',
	function($scope, $routeParams) {
		console.log('~~ view 1 controller');
	}
]);

liveAgentSFDCControllers.controller('view2Ctrl', ['$scope','$routeParams',
	function($scope, $routeParams) {
		console.log('~~ view 2 controller');
	}
]);