const { faker } = require('@faker-js/faker')


export class CommonActions {
    getAmountOfMessage(messageLocator) {
        return cy.get(messageLocator).then((messages) => {
            let amount = messages.length
            return amount
        })
    }
}


export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomString(max, min) {
    let randomText = faker.lorem.text()
    return randomText.slice(0, getRandomNumber(min, max))
}