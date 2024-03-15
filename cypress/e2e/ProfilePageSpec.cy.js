import { mystNodes } from "../pageObject/dataa/data";
import { ProfilePageActions } from "../pageObject/dataa/actions/ProfilePageActions";
import { LoginPageActions } from "../pageObject/dataa/actions/LoginPageActions";
import { generateReferralCode } from "../pageObject/dataa/data/generateReferralCode";
import { profilePage } from "../pageObject/dataa/locators/ProfilePage";
import { getRandomNumber, getRandomString } from "../pageObject/dataa/actions/CommonActions";


const profilePageActions = new ProfilePageActions()
const loginPageActions = new LoginPageActions()


describe('Check functionality of new refferal code', () => {

  before("Login via API with admin user credentials.", () => {
    loginPageActions.loginViaAPI(Cypress.env('adminUser'))
    profilePageActions.preventFriendReferralsModal()
  })

  beforeEach("Open admin referrals code page before each test.", () => {

    cy.visit(mystNodes.adminsReferralCodesPage)
  })

  describe('Check functionality of cookie pop up', { testIsolation: false }, () => {
    it('Check functionality of cookie setting', () => {
      cy.clearCookies()
      cy.wait(3000)
      cy.get(profilePage.locators.cookiePopUp.acceptAllButton).click()
      cy.getCookie('scripts_consent').then((cookie_item) => {
        expect(cookie_item.value).to.be.eq("1")
      })



    })
  })

  describe.only('Check functionality of "Create new referral code" modal', { testIsolation: false }, () => {
    // it("Create refferal code with valid data and verify", () => {
    //   generateReferralCode()
    //   cy.fixture('referralCode.json').then((referralCode) => {
    //     const referralCodeData = profilePageActions.createNewValidReferralCode(referralCode)
    //     cy.get(profilePage.locators.referralCodes.refferalCodesTable.row).then((rows) => {
    //       cy.wait(3000)
    //       cy.wrap(rows[0]).then((row) => {
    //         for (let key in objectOfRowColumns) {
    //           expect(row.find(objectOfRowColumns[key])).contain(referralCodeData[key])
    //         }
    //       })
    //     })
    //     cy.contains(profilePage.referralCodes.alertMessage.referralCodeCreated)
    //   })
    // })

    it("Check functionality of 'Create new refferal code modal's cancel button'", () => {
      cy.get(profilePage.locators.referralCodes.newReferralCodeButton).click()
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.cancelButton).click()
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.heading).should('not.be.visible')
      cy.get(profilePage.locators.referralCodes.newReferralCodeButton).should('be.visible')

    })

    it("Check functionality of 'Create new refferal code modal's cross button'", () => {
      cy.get(profilePage.locators.referralCodes.newReferralCodeButton).click()
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.closeButton).click()
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.heading).should('not.be.visible')
      cy.get(profilePage.locators.referralCodes.newReferralCodeButton).should('be.visible')

    })

    it('Check functionality of optional status.', () => {
      cy.get(profilePage.locators.referralCodes.newReferralCodeButton).click()
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.allCheckbox).not('[disabled]').check()
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.optionalStatus).contains('(optional)').its('length').should('eq', 1)

    })

  })

  describe('Check functionality of modals error messages', { testIsolation: false }, () => {

    it("Check functionality of error messages", () => {
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.createButton).click()
      profilePageActions.getAmountOfMessage(profilePage.locators.referralCodes.newReferralCodeModal.errorMessage.required).then((amount) => {
        expect(amount).to.be.eq(4)
      })
    })


    it('Check functionality of required error message', () => {
      const [referralCodeData, emptyFieldsAmount] = generateReferralCode({}, true)
      profilePageActions.createNewValidReferralCode(referralCodeData)
      profilePageActions.getAmountOfMessage(profilePage.locators.referralCodes.newReferralCodeModal.errorMessage.required).then((amount) => {
        expect(amount).to.be.eq(emptyFieldsAmount)
      })
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.alert.referralCodeCreated).should('not.be.visible')
    })


    it('Check functionality of maximum value is 15 error message', () => {
      const referralCodeData = generateReferralCode({ reward: getRandomNumber(16, 100) })
      profilePageActions.createNewValidReferralCode(referralCodeData)
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.errorMessage.maximumValueIs15).then((errorMessage) => {
        expect(errorMessage).contain(profilePage.referralCodes.errorMessage.maximumValueIs15)
      })
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.alert.referralCodeCreated).should('not.be.visible')

    })

    it('Check functionality of minimum value is 1 error message', () => {
      const referralCodeData = generateReferralCode({ reward: 0, threshold: 0, capacity: 0 })
      profilePageActions.createNewValidReferralCode(referralCodeData)
      profilePageActions.getAmountOfMessage(profilePage.locators.referralCodes.newReferralCodeModal.errorMessage.minimumValueIs1).then((amount) => {
        expect(amount).to.eq(3)
      })
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.alert.referralCodeCreated).should('not.be.visible')

    })

    it('Check functionality of minimum 10 characters error message', () => {
      const referralCodeData = generateReferralCode({ description: getRandomString(5, 10) })
      profilePageActions.createNewValidReferralCode(referralCodeData)
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.errorMessage.minimum10Characters).should('contain.text', profilePage.referralCodes.errorMessage.minimum10Characters)
      cy.get(profilePage.locators.referralCodes.newReferralCodeModal.alert.referralCodeCreated).should('not.be.visible')

    })

    it("Check functionality of alert error message `'Code referral code already exists'", () => {
      profilePageActions.getNameOfExistedReferralCode(0).then((ref_code) => {
        const referralCodeData = generateReferralCode({ code: ref_code })
        profilePageActions.createNewValidReferralCode(referralCodeData)
        cy.get(profilePage.locators.referralCodes.newReferralCodeModal.alert.referralCodeAlreadyExists.alertMessage).should('contain', ref_code)

      })
    })
  })

})

describe('Check functionality of referral codes table', () => {
  before("Login via API with admin user credentials.", () => {
    loginPageActions.loginViaAPI(Cypress.env('adminUser'))
    profilePageActions.preventFriendReferralsModal()
  })

  beforeEach("Open admin referrals code page before each test.", () => {
    cy.visit(mystNodes.adminsReferralCodesPage)
  })
  describe('Check functionality of the editing referral code', { testIsolation: false }, () => {

    it('Check functionality of editing referral code', async () => {
      const dataForEditing = generateReferralCode({ code: 'Test_Code_599', reward: 'empty', capacity: 'empty', threshold: 'empty', expirationDate: 'empty', description: 'empty' })
      await profilePageActions.editReferralCode({ dataForEditing: dataForEditing })
      cy.contains(profilePage.referralCodes.alertMessage.referralCodeCreated)
      profilePageActions.getReferralCodeDataByCode('Test_Code_599').then((data) => {
        for (let key in dataForEditing) {
          if (dataForEditing[key]) expect(dataForEditing[key]).to.eq(data[key])
        }
      })
    })

    it('Check functionality of copy buttons.', async () => {
      let copyButtons = await profilePageActions.getCopyButtonsByReferralCode()
      for (let btn of copyButtons) {
        const copiedTextInClipboard = btn.text()
        console.log(copiedTextInClipboard);
        cy.get(btn).click()
        cy.assertValueCopiedToClipboard(copiedTextInClipboard)
      }

    })

    it('Check functionality of "Rows per page" dropdown.', async () => {
      const possibleRowAmount = [5, 10, 15, 20, 25, 30, 50, 100]
      const allRowsAmount = await profilePageActions.getAmountOfAllRowsFromText()
      for (let amount of possibleRowAmount) {
        profilePageActions.changeAmountOfRows(amount)
        cy.wait(3000)
        cy.get(profilePage.locators.referralCodes.refferalCodesTable.rowsAmountOfAll).should((el) => {
          if (amount < allRowsAmount) {
            expect(el).to.contain(`-${amount} of ${allRowsAmount}`)
          } else {
            expect(el).to.contain(`-${allRowsAmount} of ${allRowsAmount}`)
          }
        })
        profilePageActions.getAmountOfRows().then((actualRowsAmount) => {
          if (amount < allRowsAmount) expect(actualRowsAmount).to.eq(amount)
          else expect(actualRowsAmount).to.eq(allRowsAmount)
        })
      }
    })

    it('Check functionality of navigation buttons.', async () => {
      const possibleRowAmount = [5, 10, 15, 20, 25, 30, 50, 100]
      const allRowsAmount = await profilePageActions.getAmountOfAllRowsFromText()
      for (let amount of possibleRowAmount) {
        const clickAmount = Math.floor(allRowsAmount / amount)
        profilePageActions.changeAmountOfRows(amount)
        for (let i = 1, from = 1; i <= clickAmount; i++) {
          profilePageActions.getAmountOfRows().then((actualRowsAmount) => {
            switch (true) {
              case i == clickAmount:
                expect(actualRowsAmount).lte(amount)
                break;
              case i < clickAmount:
                expect(actualRowsAmount).eq(amount)
                break;
            }
          })
          profilePageActions.getNavigationText((text) => {
            expect(text).to.contain(`${from}-${amount * i} of ${allRowsAmount}`)
          })
          profilePageActions.goToNextPage()
          from += amount

        }

        profilePageActions.goToFirstPage()
      }

    })

  })

  describe('Check functionality of column sorting', { testIsolation: false }, () => {

    beforeEach(() => {
      cy.intercept("GET", "/api/v2/admin/referral-codes").as("referalCodes")
      profilePageActions.returnToDefaultSortCondition()
    })

    it('Check functionality of sorting(asc) by referral code id.', async () => {
      profilePageActions.changeAmountOfRows(100)
      profilePageActions.sortBy('ID', 'asc')
      const idData = await profilePageActions.getArrayOfData('id')
      for (let i = 0; i < idData.length - 1; i++) {
        console.log(idData[0]);
        expect(idData[i]).lessThan(idData[i + 1])
      }
    })

    it('Check functionality of sorting(desc) by created data.', async () => {
      profilePageActions.changeAmountOfRows(100)
      profilePageActions.sortBy('Created', 'desc')
      const createdData = await profilePageActions.getArrayOfData('created')
      for (let i = 0; i < createdData.length - 1; i++) {

        expect(createdData[i]).to.be.gte(createdData[i + 1])
      }
    })

    // 'No expiration' status between valid created dates
    it('Check functionality of sorting(asc) by expiration date.', async () => {
      profilePageActions.changeAmountOfRows(100)
      profilePageActions.sortBy('Expiration date', 'asc')
      const createdData = await profilePageActions.getArrayOfData('expirationDate')
      for (let i = 0; i < createdData.length - 1; i++) {

        expect(createdData[i]).to.be.lte(createdData[i + 1])
      }
    })

  })


  describe.skip('Check functionality of table grouping', () => {
    beforeEach(() => {
      cy.intercept("GET", "/api/v2/admin/referral-codes").as("referalCodes")
    })
    it("test group", () => {
      cy.wait('@referalCodes')
      cy.get('button[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"] [data-testid="FullscreenIcon"]').click()
      cy.wait(2000)
      profilePageActions.getColumnDragButton('Code').then((btn) => {
        cy.get(profilePage.locators.referralCodes.refferalCodesTable.dropForSorting).then((place) => {
          cy.wrap(btn).trigger('mousedown').trigger('mousemove', { clientX: 200, clientY: 200 }).wait(4000).trigger('mousemove', { clientX: 450, clientY: 200 })

        })

      })

    })
  })
})