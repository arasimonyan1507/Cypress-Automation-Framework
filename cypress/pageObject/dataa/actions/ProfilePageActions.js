import { profilePage } from "../locators/ProfilePage";
import { CommonActions } from "./CommonActions";
import { getRandomNumber } from "./CommonActions";
import { homePage } from "../locators/HomePage";
import { objWithRefferalCodeModalLocators, locatorsToGetDataFromTable } from "../locators/ProfilePage";

export class ProfilePageActions extends CommonActions {

    createNewValidReferralCode(newReferralCodeData, unlimitedCapacity = false, noExpiration = false) {
        cy.get(profilePage.locators.referralCodes.newReferralCodeButton).click()
        cy.contains(profilePage.referralCodes.headingCreateText)

        for (let key in newReferralCodeData) {
            cy.get(objWithRefferalCodeModalLocators[key]).clear()
            if (newReferralCodeData[key]) cy.get(objWithRefferalCodeModalLocators[key]).type(newReferralCodeData[key])

        }

        if (unlimitedCapacity) cy.get(profilePage.locators.referralCodes.newReferralCodeModal.unlimitedCapacityCheckbox).check()
        if (noExpiration) cy.get(profilePage.locators.referralCodes.newReferralCodeModal.noExpirationCheckbox).check()

        cy.get(profilePage.locators.referralCodes.newReferralCodeModal.createButton).click()

        return newReferralCodeData
    }

    async getNameOfExistedReferralCode(row = getRandomNumber(0, 29)) {
        let referralCode
        await cy.get(profilePage.locators.referralCodes.refferalCodesTable.row_code_button).then((row_codes) => {
            referralCode = row_codes[row].textContent
        })
        return referralCode
    }


    async editReferralCode({ dataForEditing, unlimitedCapacity = false, noExpiration = false }) {
        if (!dataForEditing.code) {
            dataForEditing.code = await this.getNameOfExistedReferralCode()
        }
        cy.get(homePage.friendReferralsAreNowLiveModal.locators.closeButton).if().click()
        cy.wait(3000)
        cy.get(profilePage.locators.referralCodes.refferalCodesTable.row_code).contains(dataForEditing.code).then((array) => {
            for (let i = 0; i < array.prevObject.length; i++) {
                if (array.prevObject[i].textContent == dataForEditing.code) {
                    cy.wrap(array.prevObject[i]).parent().siblings(profilePage.locators.referralCodes.refferalCodesTable.row_kebab_button).click()
                }
            }
        })
        cy.get(profilePage.locators.referralCodes.refferalCodesTable.row_edit_button).click()
        cy.contains(profilePage.referralCodes.headingUpdateText(dataForEditing?.code))
        cy.get(profilePage.locators.referralCodes.newReferralCodeModal.heading).contains(dataForEditing.code)
        cy.get(profilePage.locators.referralCodes.newReferralCodeModal.codeInputField).then((codeInputField) => {
            expect(codeInputField).to.have.attr('disabled')
            cy.wrap(codeInputField).invoke('val').then((valueOfDisabledCodeInputField) => {
                expect(valueOfDisabledCodeInputField).eq(dataForEditing.code)
            })
        })

        for (let key in dataForEditing) {
            console.log(dataForEditing[key]);
            if (dataForEditing[key]) {
                cy.get(objWithRefferalCodeModalLocators[key]).not('[disabled]').if().clear()
                cy.get(objWithRefferalCodeModalLocators[key]).not('[disabled]').if().type(dataForEditing[key])
            }
            if (unlimitedCapacity) cy.get(profilePage.locators.referralCodes.newReferralCodeModal.unlimitedCapacityCheckbox).check().should('be.checked')
            if (noExpiration) cy.get(profilePage.locators.referralCodes.newReferralCodeModal.noExpirationCheckbox).check().should('be.checked')

        }

        cy.get(profilePage.locators.referralCodes.newReferralCodeModal.createButton).click()

        return dataForEditing
    }

    getReferralCodeDataByCode(referralCode) {
        cy.get(homePage.friendReferralsAreNowLiveModal.locators.closeButton).if().click()
        cy.wait(3000)
        return cy.get(profilePage.locators.referralCodes.refferalCodesTable.row_code).contains(referralCode).then((array) => {
            for (let i = 0; i < array.prevObject.length; i++) {
                // cy.get(objWithRefferalCodeModalLocators[key]).not('[disabled]').if().clear()

                if (array.prevObject[i].textContent == referralCode) {
                    return cy.wrap(array.prevObject[i]).parent().siblings()
                }
            }
        }).then((siblings) => {
            let referralCodeData = {}
            const arrayOfKeys = ["id", "version", "reward", "threshold", "capacity", "usage", "description", "created", "expiration"]
            for (let s = 0; s <= 8; s++) {
                referralCodeData[arrayOfKeys[s]] = siblings[s].textContent
            }
            referralCodeData.code = referralCode
            return referralCodeData
        })

    }


    async getCopyButtonsByReferralCode(referralCode = false) {
        if (!referralCode) referralCode = await this.getNameOfExistedReferralCode()
        let arrayOfButtons = []
        cy.get(profilePage.locators.referralCodes.refferalCodesTable.row_code).contains(referralCode).then((array) => {
            for (let i = 0; i < array.prevObject.length; i++) {
                if (array.prevObject[i].textContent == referralCode) {
                    cy.wrap(array.prevObject[i]).parent().then((el) => {
                        arrayOfButtons.push(el.children('button'))
                        for (let button of [profilePage.locators.referralCodes.refferalCodesTable.row_description, profilePage.locators.referralCodes.refferalCodesTable.row_expirationDate]) {
                            arrayOfButtons.push(el.siblings(button).children('button'))

                        }
                    })
                }
            }
        })

        return arrayOfButtons
    }

    changeAmountOfRows(amount = 30) {
        const possibleAmount = [5, 10, 15, 20, 25, 30, 50, 100]
        if (!(possibleAmount.includes(amount))) {
            throw new Error(`Rows amount(${amount}) is not correct.`)
        } else {
            cy.get(profilePage.locators.referralCodes.refferalCodesTable.rowsPerPageDropdown).click()
            cy.get(profilePage.locators.referralCodes.refferalCodesTable.rowPerPageAmount(amount)).click()

        }

    }

    getAmountOfRows() {
        return cy.get(profilePage.locators.referralCodes.refferalCodesTable.row).then((rows) => {
            return rows.length
        })
    }

    async getAmountOfAllRowsFromText() {
        cy.wait(2000)
        return cy.get(profilePage.locators.referralCodes.refferalCodesTable.rowsAmountOfAll).then((el) => {
            return parseInt(el.text().split(' ')[2])
        })
    }

    navigatePages(buttonLocator, clickAmount = 1) {
        while (clickAmount) {
            cy.get(buttonLocator).if().click()
            clickAmount--
        }
    }

    goToNextPage(clickAmount) {
        this.navigatePages(profilePage.locators.referralCodes.refferalCodesTable.nextPageButton, clickAmount)
    }

    goToPreviousPage(clickAmount) {
        this.navigatePages(profilePage.locators.referralCodes.refferalCodesTable.previousPageButton, clickAmount)
    }

    goToFirstPage() {
        this.navigatePages(profilePage.locators.referralCodes.refferalCodesTable.firstPageButton)
    }

    goToLastPage() {
        this.navigatePages(profilePage.locators.referralCodes.refferalCodesTable.lastPageButton)
    }

    getNavigationText() {
        cy.wait(3000)
        return cy.get(profilePage.locators.referralCodes.refferalCodesTable.rowsAmountOfAll).then((el) => {
            return el.text()
        })
    }

    sortBy(sortBy, sort) {
        const validSortColumns = ['ID', 'Version', 'Code', 'Created', 'Expiration date', 'Reward', 'Threshold', 'Capacity', 'Usage']
        if (!validSortColumns.includes(sortBy)) throw new Error(`Column to sort is not valid ${sortBy}`)

        const validSortOptions = ['asc', 'desc']
        if (!validSortOptions.includes(sort)) throw new Error(`Sort option is not valid ${sort}`)
        const sortDirection = sort == 'asc' ? 'ascending' : 'desceding'
        const ascBeforeDesc = ['ID', 'Version', 'Code', 'Created', 'Expiration date'].includes(sortBy)

        cy.get(profilePage.locators.referralCodes.refferalCodesTable.columnId).siblings('span').as('sortBtn')
        cy.get(profilePage.locators.referralCodes.refferalCodesTable.column).contains(sortBy).if().siblings('span').as('sortBtn')

        switch (true) {
            case sort == validSortOptions[0]:
                cy.get('@sortBtn').click()
                if (!ascBeforeDesc) cy.get('@sortBtn').click()
                break
            case sort == validSortOptions[1]:
                cy.get('@sortBtn').click()
                if (ascBeforeDesc) cy.get('@sortBtn').click()
                break
        }
    }

    returnToDefaultSortCondition() {
        cy.wait("@referalCodes")
        window.localStorage.setItem('TableMRT_referralCodes_state', JSON.stringify({ "columnFilters": [], "columnVisibility": {}, "density": "compact", "showColumnFilters": true, "sorting": [{ "id": "null", "desc": false }], "columnOrder": ["mrt-row-expand", "id", "version", "code", "nodeRewardMystEther", "rewardThresholdMystEther", "capacity", "usage", "description", "createdAt", "expiresAt", "mrt-row-actions"] }))
    }

    getArrayOfData(column = 'id') {
        const arrayOfData = []
        cy.get(locatorsToGetDataFromTable[column]).then((rows) => {
            switch (true) {
                case column == 'created' || 'expirationDate':
                    for (let i = 0; i < rows.length; i++) {
                        const rowCreatedDate = new Date(rows[i].textContent)
                        arrayOfData.push(rowCreatedDate)
                    }
                    break;

                default: for (let i = 0; i < rows.length; i++) {
                    arrayOfData.push(parseInt(rows[i].textContent))
                }
            }
        })
        return cy.wrap(arrayOfData)
    }

    preventFriendReferralsModal() {
        window.localStorage.setItem('friendReferralsModal', JSON.stringify({ "key": "friendReferralsModal", "seen": true }))
    }

    getColumnDragButton(columnName) {
        return cy.get(profilePage.locators.referralCodes.refferalCodesTable.column).contains(columnName).if().parent().siblings('div').children('button[class*="css-1srdcci"]')
    }

    groupByColumnByDragging(columnName) {
        const validColumns = ['ID', 'Version', 'Code', 'Reward', 'Threshold', 'Capacity', 'Usage', 'Description', 'Created', 'Expiration date']
        if (!validColumns.includes(columnName)) throw new Error('Column name is not valid')
        this.getColumnDragButton(columnName).then((btn) => btn.drag())

    }

}
