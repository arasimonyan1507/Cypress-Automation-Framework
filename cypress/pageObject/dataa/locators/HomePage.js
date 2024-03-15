export const homePage = {
    locators: {
        windowsIcon: 'button[id="LandingPage.WindowsDownload"]',
        macIcon: 'button[id="LandingPage.MACOSDownload"]',
        linuxIcon: 'button[id="LandingPage.linuxOnboarding"]',
        androidIcon: 'button[id="LandingPage.androidDownload"]',
        debianIcon: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(1)',
        dockerIcon: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(2)',
        ubuntuIcon: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(3)',
        raspberryPiIcon: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(4)',
        macIcon2: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(5)',
        windowsIcon2: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(6)',
        dAppNodeIcon: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(7)',
        androidIcon2: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(8)',
        nebraIcon: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(9)',
        kryptexIcon: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(10)',
        sensecapIcon: 'div[id="Platforms.wrapper"]>div:nth-child(2)>a:nth-child(11)',
        getStartedButton: 'button[id="LandingPage.SeeMore"]',
        fullLeaderboardButton: 'button[id="LeaderBoard.FullLeaderBoard"]',
        earningsTextLink: 'a[class="sc-dkmUuB gFGjeK"]',
        leaderboardHeadline: 'id="LeaderBoard.Title"',
        leaderboardSubHeadline: 'id="LeaderBoard.SubTitle"',
        earnCryptoHeadline: 'div[class="sc-fvtFIe hBhMru"]',
        platformsHeadline: 'div[id="Platforms.Title"]',
        whyRunHeadline: 'div[id="WhyMysterium.wrapper"]>div:nth-child(1)',
        networkStatisticsHeadline: 'div[id="NetworkStatistics.wrapper"]>div:nth-child(1)',
        networkStatisticsSubHeadline: 'div[id="NetworkStatistics.wrapper"]>div:nth-child(2)',
        earningsFactorHeadline: 'div[id="EarningFactors.title"]',
        earningFactorGetStartedButton: 'button[id="EarningFactor.GetStarted"]',
        nodeRunnersHeadline: 'div[id="NodeRunners.container"]>div'


    },
    title: 'Get Started | MystNodes',
    headlineText: 'Earn Crypto While You Sleep',
    subHeadlineText: 'Turn your unused internet connection into passive income with your everyday devices.',
    leaderboardHeadlineText: 'Earnings',
    leaderboardSubHeadlineText: 'Leaderboard - Last 30 days',
    earnCryptoHeadlineText: 'Earn crypto in just a few steps',
    platformsHeadlineText: 'Crypto mining software for any device or OS.',
    whyRunTitleText: 'Why run a crypto node?',
    networkStatisticsHeadlineText: 'Mysterium Network in Numbers',
    networkStatisticsSubHeadlineText: 'Join the fastest growing community democratising the web, one node at a time.',
    earningsFactosHeadlineText: 'What influences your earning potential?',
    nodeRunnersHeadlineText: 'Hear from our node runners',

    friendReferralsAreNowLiveModal: {
        locators: {
            closeButton: 'button[id="Modal.closeButton"]',
            blogLink: 'p.text-purple-800>a',
            crossButton: 'div[id="Modal.closeIcon"]'

        },
        headingText: 'Friend referrals are now live!',
        info: 'Share your link, spread the news, and get some MYST! Read more on our blog.',

    }

}