// export const existingUsers = {
//     withAdminUser: {
//         username: Cypress.env('adminUser').validUsername,
//         password: Cypress.env('adminUser').validPassword,
//         apiKey: Cypress.env('adminUser').APIkey
//     },
//     withValidUsernameAndPassword: {
//         username: Cypress.env('standardUser').validUsername,
//         password: Cypress.env('standardUser').validPassword,
//     },
//     withUppercaseUsername: {
//         username: Cypress.env('standardUser').validUsername,
//         password: Cypress.env('standardUser').validPassword,
//     },
//     withInvalidPassword: {
//         username: Cypress.env('standardUser').validUsername,
//         password: 'invalidPassword',
//     },
//     withBlankUsername: {
//         username: '',
//         password: Cypress.env('standardUser').validPassword,
//     },
//     withBlankPassword: {
//         username: Cypress.env('standardUser').validUsername,
//         password: '',
//     },
//     withNewPassword: {
//         username: Cypress.env('standardUser').validUsername,
//         password: 'testAccount',
//     },
//     userData: {
//         apiKey: Cypress.env('standardUser').APIkey,
//     },
//     userViaGoogleSSO: {
//         clientId: Cypress.env('googleSSOuser').clientId,
//         credential: Cypress.env('googleSSOuser').credential,
//         emailAddress: 'testuser190623@gmail.com'
//     }
// };


export const mystNodes = {
    homePage: '/',
    signupPage: '/registration',
    verificationPage: '/verification',
    loginPage: '/login',
    profilePage: '/me',
    myNodesPage: '/nodes',
    LeaderboardPage: '/leaderboard',
    earningsPage: '/earnings',
    termsAndConditionsPage: '/terms',
    privacyPolicyPage: '/web-terms',
    faqPage: '/faq',
    onboardingPage: '/onboarding',
    payoutRulesPage: '/payout-rules',
    desktopInstallationPage: '/onboarding/desktop',
    linuxInstallationPage: '/onboarding/desktop/linux/0',
    windowsInstallationPage: '/onboarding/desktop/windows/0',
    macosInstallationPage: '/onboarding/desktop/macos/0',
    avadoInstallationPage: '/onboarding/otherdevices/avado/0',
    raspberryPiInstallationPage: '/onboarding/rpi',
    dAppNodeInstallationPage: '/onboarding/otherdevices/dappnode/0',
    emailPage: '/help@mysterium.network',
    passiveIncomePage: '/passive-income',
    blogPage: 'https://blog.mystnodes.com/',
    adminsReferralCodesPage: '/me/admin/referral-codes',

};

export const api = {
    googleSSOlogin: 'api/v2/auth/google',
    loginAPI: '/api/v2/auth/login'
}

export const emailAddresses = {
    mysteriumEmailAddress: 'no-reply@mystnodes.com'
}



export const socialMedia = {
    coinmarketcapMysteriumPage: 'https://coinmarketcap.com/currencies/mysterium/',
    coinmarketcapPage:
        'https://coinmarketcap.com/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=mystnodes.com&utm_content=mysterium',
    mysteriumDocsPage: 'https://docs.mysterium.network/',
    facebookPage: 'https://www.facebook.com/MysteriumNet/',
    twitterPage: 'https://twitter.com/MysteriumNet',
    youtubePage: 'https://www.youtube.com/channel/UCBxzWnZEHvuj-nfP00YImHQ',
    telegramPage: 'https://t.me/mysterium_network',
    discordPage: 'https://discord.com/invite/n3vtSwc',
    githubPage: 'https://github.com/MysteriumNetwork',
    mediumPage: 'https://medium.com/mysterium-network',
    mailchiPage: 'https://mailchi.mp/mysterium.network/newsletter',
    googleHelpLink: 'https://policies.google.com/privacy',
    firstFacebookHelpPage: 'https://www.facebook.com/help/585318558251813',
    secondFacebookHelpPage: 'https://www.facebook.com/help/568137493302217',
    adAllianceInUSAPage: 'https://optout.aboutads.info/?c=2&lang=EN',
    adAllianceInCanadaPage: 'https://youradchoices.ca/',
    adAllianceInEuropePage: 'https://www.youronlinechoices.eu/',
    firstLinkedinHelpPage: 'https://business.linkedin.com/marketing-solutions/ad-targeting/retargeting',
    secondLinkedinHelpPage: 'https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out',
    redditHelpPage: 'https://advertising.reddithelp.com/en',
    twitterHelpPage: 'https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads',
    typeFormHelpPage: 'https://admin.typeform.com/to/dwk6gt',
    intercomeHelpPage: 'https://www.intercom.com/legal/terms-and-policies#terms',
    mailchipHelpPage: 'https://www.intuit.com/privacy/statement/',
};

export const OS = {
    Windows: 'windows',
    Linux: 'linux',
    MacOS: 'macos',
};

export const OSIcons = {
    Windows: 'windows',
    Linux: 'linux',
    MacOS: 'apple',
};

export const Status = {
    Online: 'Online',
    Offline: 'Offline',
    ConnectionFailed: 'Connection failed',
};