import { loginPage } from "../locators/LoginPage"
import { topBar } from "../locators/Header"
import { mystNodes } from "../data"
import { api } from "../data"
import { homePage } from "../locators/HomePage"
import { CommonActions } from "./CommonActions"

export class LoginPageActions extends CommonActions {


    logsIn = (credentials) => {
        try {
            cy.visit('/login')
            if (cy.contains('Friend referrals are now live')) cy.get('div[id="Modal.closeIcon"]').click()
            cy.get(loginPage.locators.emailInputField).type(credentials.username)
            cy.get(loginPage.locators.passwordInputField).type(credentials.password)
            cy.get(loginPage.locators.loginButton).click()
            cy.get(topBar.locators.userAvatarEmail).contains(credentials.username)
            cy.window().then((window) => {
                expect(window.localStorage.getItem('auth_token')).not.to.be.null
            })
            cy.wait(2000)
            cy.url().then((url) => {
                expect(url).to.contain(mystNodes.myNodesPage)
            })
            cy.get(homePage.friendReferralsAreNowLiveModal.locators.crossButton).if().click()


        } catch (error) {
            throw new Error(`${error} occured while trying to login with credentials ${credentials} `)
        }
    }

    loginViaAPI = (credentials) => {
        try {
            cy.visit('/')
            const tokenTTL = 900000;
            const refreshTokenTTL = 604800000;
            const data = { email: credentials.username, password: credentials.password }
            cy.request('POST', api.loginAPI, data).then((response) => {
                const auth_token_expires_on = Date.now() + tokenTTL
                const refresh_token_expires_on = Date.now() + refreshTokenTTL
                window.localStorage.setItem('auth_token', response.body.accessToken)
                window.localStorage.setItem('refresh_token', response.body.refreshToken)
                window.localStorage.setItem('auth_token_expires_on', auth_token_expires_on)
                window.localStorage.setItem('refresh_token_expires_on', refresh_token_expires_on)
            })
            cy.visit('/')
            cy.get(topBar.locators.userAvatarEmail).contains(credentials.username)
            cy.window().then((window) => {
                expect(window.localStorage.getItem('auth_token')).not.to.be.null
            })
        } catch (error) {
            throw new Error(`${error} occured while trying to login via API with credentials ${credentials} `)

        }
    }

    loginViaGooglesSSO = (credentials) => {
        try {
            cy.visit(mystNodes.loginPage)
            const tokenTTL = 900000;
            const refreshTokenTTL = 604800000;
            const data = { clientId: credentials.clientId, credential: credentials.credential }
            cy.request('POST', api.googleSSOlogin, data).then((response) => {
                const auth_token_expires_on = Date.now() + tokenTTL
                const refresh_token_expires_on = Date.now() + refreshTokenTTL
                window.localStorage.setItem('auth_token', response.body.accessToken)
                window.localStorage.setItem('refresh_token', response.body.refreshToken)
                window.localStorage.setItem('auth_token_expires_on', auth_token_expires_on)
                window.localStorage.setItem('refresh_token_expires_on', refresh_token_expires_on)
            })
            cy.get(topBar.locators.userAvatarEmail).contains(credentials.emailAddress)
            cy.get(homePage.friendReferralsAreNowLiveModal.locators.crossButton).if().click()
            cy.window().then((window) => {
                expect(window.localStorage.getItem('auth_token')).not.to.be.null
            })

        } catch (error) {
            throw new Error(`${error} occured while trying to login via Googles SSO with credentials ${credentials} `)

        }
    }

}