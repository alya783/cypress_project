const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://www.demo.guru99.com/V4/',
    env: {
      login: 'mngr538464',
      password: 'UmAhYjy',
    },
  },
});
