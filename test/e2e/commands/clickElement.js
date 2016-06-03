export function command(element) {
  return this
    .waitForElementPresent(element)
    .moveToElement(element, 0, 0)
    .click(element)
    .pause(1000);
};
