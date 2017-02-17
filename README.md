# syncano.com
[![Slack](https://img.shields.io/badge/chat-on_slack-blue.svg)](https://www.syncano.io/slack-invite/)
[![CircleCI](https://circleci.com/gh/Syncano/syncano.com/tree/master.svg?style=shield)](https://circleci.com/gh/Syncano/syncano.com/tree/master)

[Syncano.com](https://www.syncano.io/) Website

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

# How To Run

To run the website use the following command:

    $ npm start

If you want to see Twitter slider, you need to provide your Twitter config keys in `config/development/index.js`. If you modify this file, remember to ignore your changes with a command
`$ git update-index --assume-unchanged config/development/index.js`;

# How To Build

To build the website use the following command:

    $ npm run build

It will create a `public` directory with all static files inside. Also when building, all files from `static` directory
are copied to `public` folder.

# E2E Testing

We are using [Nightwatch.js](http://nightwatchjs.org/) for e2e testing.
**Nightwatch.js** requires few binary files which can be installed but they will be installed when tests start.

You'll also need to configure env variables for the tests to work locally:

    $ export NIGHTWATCH_EMAIL="xx"
    $ export NIGHTWATCH_PASSWORD="xx"

If you are ready just run dev server:

    $ npm start

and start testing using our test runner:

    $ npm test

it will setup and start tests. You can specify test mode:

    $ npm test {chrome|firefox|parallel}

where chrome will be default one if no argument was passed.

If part of the tests fail for some reason, you can temporarily disable them by `--skiptags` argument. So if, for instance signup tests fail, you can modify `package.json` e2e line, so that it looks like this:

    "e2e-parallel": "nightwatch -e chrome,firefox --suiteRetries 1 --skiptags signup",

Tests will continue to run but the classes tests will be skipped. Refer to the test files for the appropriate tag name.
