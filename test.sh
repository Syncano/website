#!/bin/bash
set -e

function ci_tests {
  MESSAGE=$(git log --pretty=format:%s -n 1 "$CIRCLE_SHA1")

  if [[ "$MESSAGE" == *\[e2e-skip\]* ]]; then
      message "[WARN] Skipping E2E tests !!!"
  else
      npm run e2e-setup
      npm run e2e-http-server
      echo "------- Starting E2E tests!"
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
fi
