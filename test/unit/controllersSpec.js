'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {

  describe('Generator', function () {
    var scope, ctrl, $httpBackend;

    beforeEach(module( 'Passwerd.controllers' ));

    beforeEach(inject( function ( _$httpBackend_, $rootScope, $controller ) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET( 'questions/questions.json' ).respond([
        {
          "type": "text",
          "question": "What is your favorite pet's name?"
        }
      ]);
      scope = $rootScope.$new();
      ctrl = $controller( 'Generator', {$scope:scope});
    }));

    
    it('should create generator model and be defined', inject( function ( $controller ) {
      //spec body
      expect( scope.questions ).toBeUndefined();
      $httpBackend.flush();

      expect( scope.questions ).toEqual([
      {
        "type":"text",
        "question":"What is your favorite pet's name?"
      }
      ]);
    }));
  });
});
