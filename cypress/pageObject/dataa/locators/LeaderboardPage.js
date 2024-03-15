export const leaderboardPage = {
    locators: {
        headline: 'div[id="Leaderboard.title"]>h1',
        subHeadline: 'div[id="Leaderboard.title"]>div',
        row: 'tbody[id="TableBody"]>tr',
        previousButton: 'button[id="Pagination.prevButton"]',
        nextButton: 'button[id="Pagination.nextButton"]',
        amountOfRowsDropdown: 'select[class^="items-center"]',

    },
    title: 'Leaderboard | MystNodes',
    headlineText: 'Leaderboard',
    subHeadlineText: 'Top 100 Nodes in the last 30 days',
}