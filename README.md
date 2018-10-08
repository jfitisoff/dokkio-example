# dokkio-example

Contains two different implementations of the same UI tests:
- Javascript implementation using webdriverio and mocha.
- Ruby implementation using watir and rspec.

## Javascript

```
java -jar -Dwebdriver.chrome.driver=./chromedriver 
./node_modules/.bin/wdio wdio.conf.js
```
selenium-server-standalone-3.5.3.jar
npm install webdriverio --save-dev
npm install selenium-standalone --save-dev

npm install
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar
./node_modules/.bin/wdio wdio.conf.js
