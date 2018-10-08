# dokkio-example

Contains two different implementations of the same UI tests:
- A Javascript implementation using webdriverio and mocha.
- A Ruby implementation using watir and rspec.

Both sets of tests are passing locally.

## Javascript
I used wdio to generate the scaffolding for the tests. There's probably some way
to easily initialize selenium automatically but it didn't leap out at me.

- Start selenium server at the repo root: `java -jar -Dwebdriver.chrome.driver=./chromedriver selenium-server-standalone-3.5.3.jar`
- cd into the `javascript` folder
- Use wdio to run: `./node_modules/.bin/wdio wdio.conf.js`

## Ruby
No need to manually start selenium server as long as chromedriver is somewhere
on your path.

- Install Ruby (I'm currently using 2.5.1.)
- gem install bundler.
- cd into the `ruby` folder and run `bundle install`
- Use rspec to run: `rspec spec/home_spec.rb`
