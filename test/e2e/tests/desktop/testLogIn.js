export default {
  tags: ['login'],
  after: client => client.getChromeLogs().end(),
  'Test Log In using email address': (client) => {
    const formPage = client.page.formPage();

    client
      .init()
      .setResolution(client);

    formPage
      .clickElement('@loginButton')
      .fillInput('@emailInput', process.env.NIGHTWATCH_EMAIL)
      .fillInput('@passwordInput', process.env.NIGHTWATCH_PASSWORD)
      .clickElement('@confirmButton')
      .waitForElementPresent('@dashboardBar');
  }
}
