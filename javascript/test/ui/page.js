function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url(path)
}

module.exports = new Page()

// export default class Page {
//     open (path) {
//         browser.url(path)
//     }
// }
//
// function Page () {
//   var browser;
//   var options;
//   var baseURL;
//   var webdriverio;
// }
//
// Page.configure = function (options) {
//   this.baseurl = 'https://dokkio.com';
//   this.relurl = null;
//   this.webdriverio = require('webdriverio');
//   this.options = options;
// };
//
// Page.seturl = function (r) {
//   this.relurl = r;
// };
//
// Page.start = function (options) {
//   Page.configure(options);
//   Page.browser = Page.webdriverio.remote(options);
//   Page.browser.init();
// };
//
// Page.stop = function (options) {
//   Page.browser.close();
// };
//
// Page.open = function (rel) {
//   Page.browser.url(Page.baseurl + rel);
// }
//
// Page.prototype.visit = function (path) {
//     Page.open(path)
// }
//
// module.exports = Page
