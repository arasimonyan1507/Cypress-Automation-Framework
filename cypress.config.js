const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY: 'a6b3edabdc31704dac6ac1483ed54731c27368fd58c4b3a1180014f8787df8e4',
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    requestTimeout: 30000,


    standardUser: {
      validUsername: "testuser03102022@gmail.com",
      validPassword: "Aa1@aaaaaaaa",
      APIkey: 'nfsZYgthJmAXR43VvyuontRp55lPgfKU1qzV84bZ'
    },


    adminUser: {
      validUsername: "testuser03102022@gmail.com",
      validPassword: "Aa1@aaaaaaaa",
      APIkey: 'BmXqANWowdMR7MFTtkXHjfUgb8yez2bhHSXW9zY5'

    },

    googleSSOuser: {
      clientId: "279069903149-4606f0i8as1dpi7gvhnpk22nnn0s3d6q.apps.googleusercontent.com",
      credential: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJkYzRlMTA5ODE1ZjQ2OTQ2MGU2M2QzNGNkNjg0MjE1MTQ4ZDdiNTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyNzkwNjk5MDMxNDktNDYwNmYwaThhczFkcGk3Z3ZobnBrMjJubm4wczNkNnEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyNzkwNjk5MDMxNDktNDYwNmYwaThhczFkcGk3Z3ZobnBrMjJubm4wczNkNnEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDc0NzEwNDI4MDgwMjUxNDgzNTAiLCJlbWFpbCI6InRlc3R1c2VyMTkwNjIzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MDczODE1MTYsIm5hbWUiOiJ0ZXN0IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0ptdDRGVVNSRUtDTkhWSHNvZEJvRXJKaGtZUGlEc1dhUjZTeTVBQ1dyeD1zOTYtYyIsImdpdmVuX25hbWUiOiJ0ZXN0IiwibG9jYWxlIjoiaHkiLCJpYXQiOjE3MDczODE4MTYsImV4cCI6MTcwNzM4NTQxNiwianRpIjoiNzgyNDM5YzY5YWQyMGZkNmI2MTEzOTgyODFjOTE4MmY4YjI4ZWU3OCJ9.XrTi3ANZgzDvVpE0WXdSngdpKK4ZfOoJ0BkaxYDji5XeAu-oEtyZBHVvN2DPRhJ96V20QP4RidBRCvN4WP7hgeIEWKBRZjtsRW1iAJKWu0XU0ehw1z-HG6A2H7_5hHJsaoh8ttX0j33dwKuZi5Xqx70dyjtBiml0k7MMl8gC2vXcw0Pngp9oFUFEbrZx_5LpIk3bLHsZD_At2E-BCPocwfbqDfRHwBQc6PTAGEK77CFuQ3A4tHYGcmqYwn1f4wG9fi-C6Jcwm4FO5TAMq-wN-Bh9hJLVvxnsz74UgG2cAENdAguYIAoUxbFR3orKGIrdD9_9Rmb558Sg0LAHqf-ijw"

    }


  },
  e2e: {
    baseUrl: 'https://dev.mystnodes.com',
    viewportHeight: 800,
    viewportWidth: 1400,


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
