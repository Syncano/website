exports.command = function command(element, string) {
  return this
    .waitForElementVisible(element)
    .clearValue(element)
    .setValue(element, string)
    .pause(1000);
};
