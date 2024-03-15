export const profilePage = {
    locators: {
        heading: 'div[id="Me.pageTitle"]>h1',
        subHeading: 'div[id="Me.pageTitle"]>div',
        friendReferrals: {
            heading: 'div[class="sc-gmgFlS bDRsfw"]:first-of-type',
            subHeading: 'div[class="sc-kMkxaj cvpDjO"]',
            walletAddressInput: 'input[class="sc-koXPp bdEHeE"]',
            updateWalletButton: 'button[id="ReferralLinkUpdateWallet"]',
            modalChangeWallet: {
                closeButton: 'div[id="Modal.closeIcon"]',
                heading: 'div[class="sc-jIGnZt IImFz"]',
                subHeading: 'div[class="sc-fBdRDi kXOcyW"]',
                walletAddressInput: 'input[name="walletUpdate"]',
                cancelButton: 'button[id="ReferralLinkWalletUpdateCancel"]',
                saveButton: 'button[id="ReferralLinkWalletUpdateSubmit"]',
                alertWalletSetSuccessfully: "div[class^='Toastify__toast-body']>div:nth-child(2)",
                closeAlertWalletSetSuccessfully: 'button[class^="Toastify__close-button"]'
            }
        },

        apiDetails: {
            heading: 'div[id="MMNAPI.cardTitle"]>div>div[class^="mb"]',
            subHeading: 'div[id="MMNAPI.cardTitle"]>div>div[id="MMNAPI.info"]',
            copyAPIkey: 'div[id="MMNAPI.copyTitle"]',
            apiKeyText: 'div[id="MMNAPI.copyTitle"]>div>span>div'

        },

        emailNotifications: {
            heading: 'div[id="Notifications.cardTitle"]>div>div',
            subHeading: 'p[id="Notifications.cardDescription"]',

        },

        changePassword: {
            heading: 'div[id="PasswordChange.cardTitle"]>div>div',
            oldPasswordInputField: 'input[name="oldPassword"]',
            newPasswordInputField: 'input[name="newPassword"]',
            confrimNewPasswordInputField: 'input[name="newPasswordConfirmation"]',
            updatePasswordButton: 'button[id="ChangePassword.updatePasswordButton"]',
            passwordRequirements: {
                atLeast12CharLong: 'div[class="sc-jaXxmE dFWTIt"]>div:nth-child(1)>span',
                atLeastOneUpAndLow: 'div[class="sc-jaXxmE dFWTIt"]>div:nth-child(2)>span',
                atLeastOneNumber: 'div[class="sc-jaXxmE dFWTIt"]>div:nth-child(3)>span',
                atLeastOneSpecialChar: 'div[class="sc-jaXxmE dFWTIt"]>div:nth-child(4)>span'
            }

        },

        deleteAccount: {
            heading: 'div[id="DeleteAccount"]>div>div',
            subHeading: 'div[id="DeleteAccount.Info"]',
            deleteButton: 'button[id="DeleteAccount.deleteButton"]',
            overlay: {
                heading: 'div[id="DeleteAccountModal"]>div>h2',
                info: 'id="ConfirmationDialog.message"',
                cancelButton: 'button[id="ConfirmationDialog.closeButton"]',
                deleteAccountButton: 'button[id="ConfirmationDialog.confirmButton"]'
            }
        },

        cookiePopUp: {
            popUpDiv: 'div[class^="fixed bottom-0 z-[100]"]',
            declineAllButton: 'button[id="CookiesPopUp.declineButton"]',
            acceptAllButton: 'button[id="CookiesPopUp.acceptButton"]',
            closeButton: 'svg[class="svg-inline--fa fa-xmark w-[20px] h-[20px]"]',
            intercomButton: 'svg[viewBox="0 0 28 32"]',
            info: 'div[class^="fixed bottom-0 z-[100]"]>div>span',
            privacyPolicyLink: 'div[class^="fixed bottom-0 z-[100]"]>div>a'

        },

        referralCodes: {
            newReferralCodeButton: 'button[id="ConfirmationDialog.closeButton"]',
            newReferralCodeModal: {
                heading: 'h1',
                closeButton: 'div[id="Modal.closeIcon"]',
                codeInputField: 'input[name="code"]',
                rewardInputField: 'input[name="nodeRewardMystEther"]',
                thresoldInputField: 'input[name="rewardThresholdMystEther"]',
                capacityInputField: 'input[name="capacity"]',
                expirationDatePicker: 'button[aria-label="Choose date"]',
                expirationDateInputField: 'input[id=":r7j:"]',
                unlimitedCapacityCheckbox: 'input[id="unlimitedCapacity"]',
                optionalStatus: 'div[class="sc-dAlyuH bqvnCz"]',
                noExpirationCheckbox: 'input[id="noExpiration"]',
                descriptionInputField: 'input[name="description"]',
                cancelButton: 'button[id="referralCodeFormCancel"]',
                createButton: 'button[id="referralCodeFormCreate"]',
                updateButton: '',
                allCheckbox: 'input[type="checkbox"]',

                errorMessage: {
                    required: 'div[class="text-sm text-colorDanger mt-px"]',
                    minimum10Characters: 'div[class="sc-dAlyuH UkNOH"]',
                    minimumValueIs1: 'div[class="text-sm text-colorDanger mt-px"]',
                    maximumValueIs15: 'div[class="text-sm text-colorDanger mt-px"]'
                },

                alert: {
                    commonAlertLocators: {
                        closeButton: "button[class ^= 'Toastify__close-button']",
                        alertMessage: 'div[class = "Toastify__toast-body"]>div:nth-child(2)'
                    },
                    referralCodeCreated: {
                        closeButton: "button[class ^= 'Toastify__close-button']",
                        alertMessage: 'div[class = "Toastify__toast-body"]>div:nth-child(2)'
                    },
                    referralCodeAlreadyExists: {
                        closeButton: "button[class ^= 'Toastify__close-button']",
                        alertMessage: 'div[class = "Toastify__toast-body"]>div:nth-child(2)'
                    }
                }
            },

            refferalCodesTable: {
                row: 'tr[class="MuiTableRow-root css-1t6sur8"]',
                row_id: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1b8ebwo"]',
                row_id_button: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1b8ebwo"] > button',
                row_version: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1ewpc9w"] > button',
                row_code: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1vcjcs5"]',
                row_code_button: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1vcjcs5"]>button',
                row_reward: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1wtcjbk"]',
                row_threshold: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-14vtw3a"]',
                row_capacity: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-3zxpy2"]',
                row_usage: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-6cj406"]',
                row_description: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1lwouib"]',
                row_description_button: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1lwouib"]>button',
                row_created: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-1nt6en2"]',
                row_expirationDate: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-iv8t1l"]',
                row_expirationDate_button: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-iv8t1l"]>button',
                row_kebab_button: 'td[class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft MuiTableCell-sizeMedium css-9ngohn"]',
                row_edit_button: 'ul[class="MuiList-root MuiList-padding MuiList-dense MuiMenu-list css-1k4zvc5"]',
                rowsPerPageDropdown: 'div[class="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary  css-17gdyv7"]>div',
                rowPerPageAmount: (amount) => `ul>li[data-value="${amount}"]`,
                rowsAmountOfAll: 'span[class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-13lts0x"]',
                nextPageButton: 'span[aria-label="Go to next page"]>button',
                lastPageButton: 'span[aria-label="Go to last page"]>button',
                previousPageButton: 'span[aria-label="Go to previous page"]>button',
                firstPageButton: 'span[aria-label="Go to first page"]>button',
                columnId: 'div[class="Mui-TableHeadCell-Content-Wrapper MuiBox-root css-1nz3nwl"]',
                column: 'div[class="Mui-TableHeadCell-Content-Wrapper MuiBox-root css-lapokc"]',
                sortButton: 'div>span[class="MuiBadge-root css-1rzb3uu"]',
                changedSortButton: 'div>span[aria-label^="Sorted "]',
                dropForSorting: 'div[class="Mui-ToolbarDropZone MuiBox-root css-1fwjva3"]',


            }

        }


    },
    title: "Your profile | MystNodes",
    headingText: 'Your profile',
    subHeadingText: 'Manage your personal settings',
    friendReferrals: {
        headingText: 'Friend Referrals',
        subHeadingText: 'Please enter your wallet address in the field above to enroll in our referral program',
        modalChangeWallet: {
            headingText: 'Change Wallet',
            subHeadingText: 'Please make sure the address an ERC-20 Polygon compatible wallet e.g. MetaMask',
            errors: {
                InvalidWalletAddress: 'Invalid Wallet Address',
                ThisFieldIsRequired: 'This field is required',
            },
            alerts: {
                walletSetSuccessfully: "Wallet address was successfully set",
            }
        }

    },

    apiDetails: {
        headingText: 'API details',
        subHeadingText: 'Your API key allows you to manually claim your nodes via the Node UI (go to Settings page there) and CLI.',
        apiKeyText: ''

    },

    changePassword: {
        errors: {
            thisFieldIsRequired: "This field is required.",
            passwordsAreTheSame: "Old and new passwords are the same.",
            passwordsDontMatch: 'Passwords do no match.'
        },
        passwordRequirements: {
            atLeast12CharLong: 'Password should be at least 12 characters long',
            atLeastOneUpAndLow: 'Password should contain at least one uppercase and one lowercase letter',
            atLeastOneNumber: 'Password should contain at least one number',
            atLeastOneSpecialChar: 'Password should contain at least one special character'
        }
    },

    deleteAccount: {
        headingText: 'Delete Account',
        subHeadingText: 'This will permanently remove your account from mystnodes.com'
    },

    referralCodes: {
        headingCreateText: 'Create new referral code',
        headingUpdateText: (referralCode) => `Edit referral code "${referralCode}"`,
        alertMessage: {
            referralCodeCreated: "Referral code created",
            referralCodeAlreadyExists: (referralCode) => `Code ${referralCode} already exists `
        },
        errorMessage: {
            minimumValueIs1: 'Minimum value is 1',
            required: 'Required',
            minimum10Characters: 'Minimum 10 characters',
            maximumValueIs15: 'Maximum value is 15'

        }
    }


}


export const objWithRefferalCodeModalLocators = {
    "code": profilePage.locators.referralCodes.newReferralCodeModal.codeInputField,
    "reward": profilePage.locators.referralCodes.newReferralCodeModal.rewardInputField,
    "threshold": profilePage.locators.referralCodes.newReferralCodeModal.thresoldInputField,
    "capacity": profilePage.locators.referralCodes.newReferralCodeModal.capacityInputField,
    "expirationDate": profilePage.locators.referralCodes.newReferralCodeModal.expirationDateInputField,
    "description": profilePage.locators.referralCodes.newReferralCodeModal.descriptionInputField
}


export const objectOfRowColumns = {
    code: profilePage.locators.referralCodes.refferalCodesTable.row_code,
    reward: profilePage.locators.referralCodes.refferalCodesTable.row_reward,
    capacity: profilePage.locators.referralCodes.refferalCodesTable.row_capacity,
    threshold: profilePage.locators.referralCodes.refferalCodesTable.row_threshold,
    expirationDate: profilePage.locators.referralCodes.refferalCodesTable.row_expirationDate,
    description: profilePage.locators.referralCodes.refferalCodesTable.row_description
}


export const locatorsToGetDataFromTable = {
    id: profilePage.locators.referralCodes.refferalCodesTable.row_id_button,
    version: profilePage.locators.referralCodes.refferalCodesTable.row_version,
    code: profilePage.locators.referralCodes.refferalCodesTable.row_code_button,
    reward: profilePage.locators.referralCodes.refferalCodesTable.row_reward,
    threshold: profilePage.locators.referralCodes.refferalCodesTable.row_threshold,
    capacity: profilePage.locators.referralCodes.refferalCodesTable.row_capacity,
    usage: profilePage.locators.referralCodes.refferalCodesTable.row_usage,
    description: profilePage.locators.referralCodes.refferalCodesTable.row_description_button,
    created: profilePage.locators.referralCodes.refferalCodesTable.row_created,
    expirationDate: profilePage.locators.referralCodes.refferalCodesTable.row_expirationDate_button,

}

