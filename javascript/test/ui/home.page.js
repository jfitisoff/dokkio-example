var Page = require('./page')

var HomePage = Object.create(Page, {
  jobs_panel: { get: function () { return browser.element("//div[contains(@class, 'panel-grid') and contains(., 'Jobs')]"); } },
  qa_panel: { get: function () { return browser.element("//div[contains(@class, 'panel-grid') and contains(., 'Are you an awesome developer')]"); } },
  eng_panel: { get: function () { return browser.element("//div[contains(@class, 'panel-grid') and contains(., 'Are you an awesome developer')]"); } },
  eng_button: { get: function () { return browser.element('span*=Senior Full Stack Engineer'); } },
  qa_button: { get: function () { return browser.element('span*=QA Engineer'); } },

  open: { value: function() {
      Page.open.call(this, '');
  } },
});

module.exports = HomePage;

// var Page = require('./page')
//
// // class HomePage extends Page {
// //   get eng () { return $('span*=Senior Full Stack Engineer') }
// //   get qa () { return $('span*=QA Engineer') }
// //
// //   open () {
// //     super.open('login');
// //   }
// // }
// // export default new HomePage()
//
// var Page = require('./page')
//
// var HomePage = Object.create(Page, {
//
//   engineer: { get: function () { return browser.element('span*=Senior Full Stack Engineer'); } },
//   qa: { get: function () { return browser.element('span*=QA Engineer'); } },
//
//   visit: { value: function() {
//     Page.open.call(this, '');
//   } }
// });
//
// module.exports = HomePage
