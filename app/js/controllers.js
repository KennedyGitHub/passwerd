'use strict';

/* Controllers */

angular.module('Passwerd.controllers', [])

  .controller('Inquirer', ['$scope', '$http', function($scope, $http) {
  	/*$http.get('questions/questions.json').success(function(data) {
    	$scope.questions = data;
  	},function(){
  		$scope.questions = {};
  	});*/
  }])

  .controller('Generator', ['$scope', '$http', function($scope, $http) {
    $http.get('questions/questions.json').success(function(data) {
      $scope.questions = data;
    },function(){
      $scope.questions = {};
    });
    $scope.inputs = {};
  }])
  .controller('About', ['$scope', function($scope){

  }])
  .controller('WizardCtrl', function($scope, WizardHandler) {
    $scope.finished = function() {
        alert("Wizard finished :)");
    }

    $scope.logStep = function() {
        console.log("Step continued");
    }

    $scope.goBack = function() {
        WizardHandler.wizard().goTo(0);
    }
  })
;
