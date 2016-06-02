export default {
  commands: [],
  elements: {
    loginButton: {
      selector: '//span[text()="Log In"]',
      locateStrategy: 'xpath'
    },
    signupButton: {
      selector: '//span[text()="Sign Up For Free"]',
      locateStrategy: 'xpath'
    },
    emailInput: {
      selector: '//div[@class="modal-box__content_form form"]//input[@name="email"]',
      locateStrategy: 'xpath'
    },
    passwordInput: {
      selector: '//div[@class="modal-box__content_form form"]//input[@name="password"]',
      locateStrategy: 'xpath'
    },
    confirmButton: {
      selector: '//div[@class="modal-box__content_form form"]//button',
      locateStrategy: 'xpath'
    },
    dashboardBar: {
      selector: '//li[@id="menu-solutions"]/a[text()="Solutions Market"]',
      locateStrategy: 'xpath'
    }
  }
}
