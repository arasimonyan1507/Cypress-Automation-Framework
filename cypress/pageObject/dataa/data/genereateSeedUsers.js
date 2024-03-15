const { faker } = require('@faker-js/faker');


/**
 * Creates fake user data using Faker.js and writes it to a JSON file.
 * @returns {Object} The generated fake user data.
 */
export const createFakeUser = () => {
    // Generate fake user data
    const data = {
        name: faker.person.fullName(), // Generate a fake full name
        username: faker.internet.email(), // Generate a fake email address
        password: faker.internet.password() + 7, // Generate a fake password with additional characters
    };

    // Write the generated user data to a JSON file
    cy.writeFile('cypress/fixtures/user.json', data);

    // Return the generated user data
    return data;
}
