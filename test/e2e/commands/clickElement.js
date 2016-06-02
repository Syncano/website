exports.command = function clickElement(element) {
  return this
    .waitForElementPresent(element)
    .moveToElement(element, 0, 0)
    .click(element)
    .pause(1000);
};
