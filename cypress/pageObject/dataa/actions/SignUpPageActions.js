import { mystNodes } from "../data"
import { signUpPage } from "../locators/SignUpPage"
import { verificationPage } from "../locators/SignUpPage"
import { emailAddresses } from "../data"
import { MailSlurp } from 'mailslurp-client';
import { createFakeUser } from "../data/genereateSeedUsers"
import { CommonActions } from "./CommonActions";


const validUser = Cypress.env('standardUser')

export class SignUpPageActions extends CommonActions {
    async signUpAndVerifyNewAccountname() {

        const mailslurp = new MailSlurp({ apiKey: Cypress.env("MAILSLURP_API_KEY") });
        const inbox = await mailslurp.inboxController.createInboxWithDefaults();
        cy.visit(mystNodes.signupPage)
        cy.get(signUpPage.locators.emailInputField).type(inbox.emailAddress)
        cy.get(signUpPage.locators.passwordInputField).type(validUser.password)
        cy.get(signUpPage.locators.confirmPasswordInputField).type(validUser.password)
        cy.get(signUpPage.locators.iAgreeToTermsCheckbox).check()
        cy.get(signUpPage.locators.signUpButton).click()
        cy.wait(3000)
        cy.url().should('include', mystNodes.verificationPage)
        cy.title().should('eq', verificationPage.title)
        cy.mailslurp().then(function (mailslurp) {
            return mailslurp.waitForLatestEmail(inbox.id)
        }).then(email => {
            cy.wrap(email.body).should('contain', 'Thank you for creating your MystNodes account!')
            cy.wrap(email.sender.emailAddress).should('eq', emailAddresses.mysteriumEmailAddress)
            const url = email.body.match(/https:\/\/mystnodes\.com\/verification\/\d{6}\.[a-zA-Z0-9]{60}/)[0]
            cy.visit(url)
            cy.url().should('include', mystNodes.loginPage)
            cy.contains('Your account was successfully verified. Please log in.')
        })
        return {
            username: inbox.emailAddress,
            password: validUser.password
        }
    }
}