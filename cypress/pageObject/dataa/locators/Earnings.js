export const earningsPage = {
    locators: {
        headlineText: "div>h1",
        subHeadlineText: 'div[class="text-white text-sm m-2.5 text-center"]',
        countryDropdown: 'input[id="react-select-2-input"]',
        countryName: 'div[id="react-select-2-option-0"]',
        mystAmount: 'div.sc-satoz.bPYzJV'
    },
    title: "Earnings | MystNodes",
    headlineText: "Earnings",
    subHeadlineText: "Mysterium Node",
    networkPricingRulesTitle: 'Network Pricing Rules',
    potentialEarningsTitle: 'Calculate your potential earnings',
    mystEarningsInLast30days: country => `Total MYST earned in ${country} in the last 30 days`,
    numberOfResidentialNodes: country => `Number of residential nodes in the ${country}`,
    averageEarningsPerNode: country => `Avg. earnings per node in ${country}`,
    topEarningNode: country => `Top earning node in ${country}`
}