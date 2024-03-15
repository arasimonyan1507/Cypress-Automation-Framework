const { faker } = require('@faker-js/faker')
import { getRandomNumber } from '../actions/CommonActions';

// Function to generate a referral code with optional empty fields
export const generateReferralCode = (passedData = { code, reward, threshold, capacity, expirationDate, description }, withEmptyFields = false) => {
    // If withEmptyFields flag is true, fill the passedData object with empty fields
    if (withEmptyFields) {
        passedData = Object.assign(genObjWithEmptyFieldsForRefCode(), passedData);
    }

    // Generate a random date within a range
    let date = faker.date.between({
        from: '1899/12/31',
        to: '12/30/2099'
    }).toISOString();

    // Generate data object with default values or passed values
    const data = {
        code: passedData.code == 'empty' ? '' : passedData.code ?? "Test_Code_" + Math.floor(Math.random() * 1000),
        reward: passedData.reward == 'empty' ? '' : passedData.reward ?? getRandomNumber(1, 15),
        threshold: passedData.threshold == 'empty' ? '' : passedData.threshold ?? getRandomNumber(1, 10),
        capacity: passedData.capacity == 'empty' ? '' : passedData.capacity ?? getRandomNumber(1, 50),
        expirationDate: passedData.expirationDate == 'empty' ? '' : passedData.expirationDate ?? date.slice(0, 10).split('-').reverse().join('/'),
        description: passedData.description == 'empty' ? '' : passedData.description ?? `Test description for referral code`,
    };

    // Write data object to a JSON file
    cy.writeFile('cypress/fixtures/referralCode.json', data);

    // Return data object or array containing data object and count of falsy keys
    return withEmptyFields ? [data, countOfFalsyKeys(data)] : data;
};


/**
 * Generates an object with empty fields for a referral code.
 * @param {number} emptyAmount - The number of empty fields to generate.
 * @returns {Object} An object with empty fields.
 */
export const genObjWithEmptyFieldsForRefCode = (emptyAmount = getRandomNumber(1, 6)) => {
    // Initialize an empty object
    let obj = {};

    // Define an array of field names
    const array = ["code", "reward", "threshold", "capacity", "unlimitedCapacity", "expirationDate", "description"];

    // Populate the object with empty fields
    for (let i = 0; i < emptyAmount; i++) {
        obj[array[i]] = 'empty';
    }

    // Return the generated object
    return obj;
}


/**
 * Counts the number of falsy values in the given object.
 * @param {Object} obj - The object to count falsy values in.
 * @returns {number} The number of falsy values in the object.
 */
const countOfFalsyKeys = (obj) => {
    // Initialize a count variable to store the number of falsy values
    let count = 0;

    // Iterate over the keys of the object
    for (let key in obj) {
        // Check if the value associated with the key is falsy
        if (!(obj[key])) {
            // Increment the count if the value is falsy
            count++;
        }
    }

    // Return the total count of falsy values
    return count;
}


