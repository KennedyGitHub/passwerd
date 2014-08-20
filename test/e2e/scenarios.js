'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('passwerd', function() {

  browser.get('index.html');

  it('should automatically redirect to /generate when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/generate");
  });


  describe('generate', function() {

    beforeEach(function() {
      browser.get('index.html#/generate');
    });


    it('should render view1 when user navigates to /generate', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Let's generate a Passwerd!/);
    });

  });


  describe('about', function() {

    beforeEach(function() {
      browser.get('index.html#/about');
    });


    it('should render view2 when user navigates to /about', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/About/);
    });

  });
});
