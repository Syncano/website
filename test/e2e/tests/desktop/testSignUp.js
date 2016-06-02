export default {
  tags: ['signup'],
  after(client) {
    client.end();
  },
  'Test Login using email address': (client) => {
    const formPage = client.page.formPage();
    const tempPass = Date.now();
    const tempEmail = 'syncano.bot+' + tempPass + '@syncano.com';

    client
      .init()
      .setResolution(client);

    formPage
      .clickElement('@signupButton')
      .fillInput('@emailInput', tempEmail)
      .fillInput('@passwordInput', tempPass)
      .clickElement('@confirmButton')
      .waitForElementPresent('@dashboardBar');
  }
}
