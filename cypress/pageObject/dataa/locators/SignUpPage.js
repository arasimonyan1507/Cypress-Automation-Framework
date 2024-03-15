export const signUpPage = {
    locators: {
        headline: '',
        subHeadline: '',
        emailInputField: 'input[id="RegistrationForm.email"]',
        passwordInputField: 'input[id="RegistrationForm.inputPassword"]',
        confirmPasswordInputField: 'input[id="RegistrationForm.confirmPassword"]',
        referralCodeInputField: 'input[id="RegistrationForm.referralCode"]',
        sendMeInfoCheckbox: 'input[id="RegistrationForm.marketingConsent"]',
        iAgreeToTermsCheckbox: 'input[id="RegistrationForm.accept"]',
        termsLink: 'a[id="RegistrationForm.terms"]',
        privacyPolicyLink: 'a[id="RegistrationForm.privacy"]',
        signUpButton: 'button[id="RegistrationForm.signup"]',
        loginLink: 'a[id="RegistrationForm.loginLink"]'
    },
    title: 'Register | MystNodes',
    headlineText: 'Create account',
    subHeadlineText: 'Fill out some details, onboard your nodes and start earning in no time!'
}

export const verificationPage = {
    locators: {
        heading: 'div>h1',
        info: 'div>p:nth-child(1)',
        didntReceiveInfo: 'div>p:nth-child(2)',
        resendEmailButton: 'button[id="Verification.resendEmailButton"]'
    },

    title: 'Email Verification | MystNodes',
    headingText: 'Email Verification',
    infoText: 'Thank you for registering your MystNodes Account! Please follow the instructions we just emailed to you.',
    didntReceiveInfoText: "Didn't receive verification email?"

}