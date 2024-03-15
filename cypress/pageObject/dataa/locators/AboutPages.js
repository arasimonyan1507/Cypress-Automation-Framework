export const FAQPage = {
    locators: {
        headline: '[id="FAQ.title"]>h1',
        subHeadLine: '[id="FAQ.title"]>div',
        crossButton: 'div[id="AccordionCrossButton"]',
        hereLink: "a[id='FAQ.here']",
        nodesList: num => `a[id="FAQ.NodesList${num}"]`,
    },
    title: "FAQ|MystNodes",
    headlineText: "FAQ",
    subHeadLineText: "Everything You Want To Know"
}


export const termsAndConditionsPage = {
    locators: {
        headline: 'div[class^="sc-dtBdUo"]>h1',
        subHeadLine: 'div[class ^= "sc-dtBdUo"]>div',
        firstGitHubLink: 'li>p>a[href*="mysterium"]',
        earningsLink: 'p>a[href*="earnings"]',
        secondGitHubLink: '//div[2]/p[18]/a'
    },
    title: "Terms & Conditions | MystNodes",
    headlineText: "Terms & Conditions",
    subHeadLineText: "Version: 0.0.57, Updated: 2023-12-07"
}


export const privacyPolicyPage = {
    locators: {
        headline: 'div[id="PrivacyPolicy.title"]>h1',
        googleLink: 'a[href*="google"]',
        firstFacebookLink: 'a[id="PrivacyPolicy.FacebookLink1"]',
        secondFacebookLink: 'a[id="PrivacyPolicy.FacebookLink2"]',
        digitalAdvertisingUSALink: 'a[id="PrivacyPolicy.adAllianceInUSALink"]',
        digitalAdvertisingCanadaLink: 'a[id="PrivacyPolicy.adAllianceInCanadaLink"]',
        digitalAdvertisingEuropaLink: 'a[id="PrivacyPolicy.adAllianceInEuropeLink"]',
        firstLinkedInLink: 'a[id="PrivacyPolicy.LinkedinLink1"]',
        secondLinkedInLink: 'a[id="PrivacyPolicy.LinkedinLink2"]',
        twitterLink: 'a[id="PrivacyPolicy.TwitterLink"]',
        typeFormLink: 'a[id="PrivacyPolicy.TypeformLink"]',
        intercomLink: 'a[id="PrivacyPolicy.IntercomLink"]',
        mailchimpLink: 'a[id="PrivacyPolicy.MailchimpLink"]',

    },
    title: "Website Privacy Policy | MystNodes",
    headlineText: "Privacy Policy"

}


export const blogPage = {
    locators: {
        logo: '[class="logo__link"]',
        mainMenu: '[aria-label="Main menu"]',
        homeTab: 'a.nav__link.active-link',
        allPostsTab: 'a[class="nav__link"]',


    },
    title: "Blog | Mysterium Network",

}