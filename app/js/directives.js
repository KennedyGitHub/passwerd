'use strict';

/* Directives */


angular.module('Passwerd.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };

  }])
  /*.directive('wizardInputElement', function(){

    return {
      restrict: 'E',
      replace: true,
      scope: {
        attribs:'='
      },


     
      template:'<input type="{{ q.type }}" ng-model="inputs.input[$index+1]" />',
      link: function(scope,element,attrs){
        //scope.id = attrs.id || 'input-id-'+ new Date().getTime().toString()
        //console.log(scope);console.log(element);console.log(attrs);
        Object.keys(scope).map(function(val, index){
          element.find('input').attr(val,scope.attribs[val]);
        });
        //element.find('input').attr('id', scope.id);
      }
    }
  })*/
/*
  .directive('wizard', [var], function(var){
  	return function(scope, elm, attrs) {

  	};
  };)
*/
  ;
