# syncano.com
Syncano.com Website

# Installation

Project requires node 6.2.1 and npm 3.9.3. The best way to manage node versions
I found is [n](https://github.com/tj/n).

Installation.

    $ sudo npm install -g n
    $ n 6.2.1

Type `n` to prompt selection of an installed node.
Use the up / down arrow to navigate, and press enter or the right arrow to select, or ^C to cancel:

    $ n

    ο 6.2.1
      4.4.3

# E2E Testing

We are using [nightwatchjs](http://nightwatchjs.org/) for e2e testing.
**nightwatchjs** requires few binary files which can be installed via proper NPM command:

    $ npm run e2e-setup

You'll also need to configure env variables for the tests to work locally:

    $ export NIGHTWATCH_EMAIL="xx"
    $ export NIGHTWATCH_PASSWORD="xx"

You will get them here: [link](https://syncano.atlassian.net/wiki/display/SYN/How+to+setup+and+run+nightwatch+e2e+tests).

If you are ready just run dev server:

    $ npm start

and start testing using two browsers in parallel mode:

    $ npm run e2e-local

or one by one:

    $ npm run e2e-chrome
    $ npm run e2e-firefox


If part of the tests fail for some reason, you can temporarily disable them by `--skiptags` argument. So if, for instance signup tests fail, you can modify `package.json` e2e line, so that it looks like this:

    "e2e-local": "nightwatch -e chrome,firefox --suiteRetries 1 --skiptags signup",

Tests will continue to run but the classes tests will be skipped. Refer to the test files for the appropriate tag name.
