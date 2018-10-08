var HomePage = require('../ui/home.page');
var assert = require('assert');

// import HomePage from '../ui/home.page'

describe('Home page', function () {
  it('Displays the Senior Full Stack Engineer position by default', function () {
      HomePage.open();
      assert.ok(HomePage.jobs_panel.getText().includes('Are you an awesome developer'))
  });

  it('Displays the QA Engineer position when the QA Engineer button is clicked', function () {
      HomePage.open();
      HomePage.qa_button.click();
      assert.ok(HomePage.jobs_panel.getText().includes('Do you love high quality software'))
  });
});
