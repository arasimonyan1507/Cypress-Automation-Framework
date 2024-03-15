const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://dev.mystnodes.com',
        viewportHeight: 800,
        viewportWidth: 1400,

    },
    env: {
        adminUser: {
            username: 'testuser03102022@gmail.com',
            password: 'Bb1@bbbbbbbb'
        }
    }
})