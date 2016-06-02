export default {
  analyticsKey: process.env[STAGING_ANALYTICS_WRITE_KEY],
  contactFormEmail: process.env[STAGING_CONTACT_FORM_EMAIL],
  dashboardUrl: process.env[STAGING_DASHBOARD_URL],
  statusPageStatusUrl: process.env[STATUS_PAGE_URL],
  supportFormEmail: process.env[STAGING_SUPPORT_FORM_EMAIL],
  syncanoAPIBaseUrl: process.env[STAGING_API_URL],
  hello: {
    github: process.env[STAGING_HELLO_GITHUB],
    facebook: process.env[STAGING_HELLO_FACEBOOK],
    google: process.env[STAGING_HELLO_GOOGLE],
    redirect_uri: process.env[STAGING_HELLO_REDIRECT_URI]
  }
};
