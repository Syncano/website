#!/bin/bash
set -e

function local_tests {
    if [ -z "$NIGHTWATCH_EMAIL" ] || [ -z "$NIGHTWATCH_PASSWORD" ]; then
      echo "Missing env variables NIGHTWATCH_EMAIL or NIGHTWATCH_PASSWORD!!"
      echo "Please check README.md for more information"
      echo "" && exit 1
    else
      npm run e2e-setup

      # If no argument specified tests start by default on chrome
      case "$1" in
          chrome) npm run e2e-chrome ;;
          firefox) npm run e2e-firefox ;;
          parallel) npm run e2e-parallel ;;
          *) npm run e2e-chrome
      esac
    fi
}

function ci_tests {
    MESSAGE=$(git log --pretty=format:%s -n 1 "$CIRCLE_SHA1")

    if [[ "$MESSAGE" == *\[e2e-skip\]* ]]; then
        message "[WARN] Skipping E2E tests !!!"
    else
        npm run e2e-setup
        npm run e2e-http-server
        npm run e2e-chrome
        mv reports/selenium-debug.log reports/chrome-debug.log
        # Firefox changed driver to geckodriver due to this compatibility with Selenium is not complete
        # For now disabling them, more info: http://nightwatchjs.org/getingstarted#geckodriver
        # npm run e2e-firefox
        # mv reports/selenium-debug.log reports/firefox-debug.log
        mv public/nohup.out reports/http-server.log
    fi
}

if [ "$CI" = true ]; then
    ci_tests
else
    local_tests $@
fi
