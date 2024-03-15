export const loginPage = {
    locators: {
        headline: 'form[id="LoginForm"]>div:nth-child(1)',
        subHeadline: 'form[id="LoginForm"]>div:nth-child(2)',
        emailInputField: 'input[id="LoginForm.email"]',
        passwordInputField: 'input[id="LoginForm.password"]',
        rememberMeCheckbox: 'input[id="LoginForm.checkboxLabel"]',
        forgotPasswordLink: "div[class^='flex items-center justify-between']>a",
        loginButton: 'button[id="LoginForm.loginButton"]',
        googleSSO: 'div[id="googleButton"]',
        facebookSSO: 'button.facebook-btn.small',
        signUpLink: 'a.text-primary'

    },
    title: 'Login | MystNodes',
    headlineText: 'Log In',
    subHeadlineText: 'Sign into your personal dashboard to check up on your node & earnings.',

}