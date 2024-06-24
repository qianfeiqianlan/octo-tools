// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    window.xx = {}
    cy.fixture('account.js').as('ACCOUNT')
    .fixture('settings.js').as('SETTINGS')
    .fixture('post.json').as('POST')
    cy.get('@ACCOUNT').then((ACCOUNT) => {
        window.ACCOUNT = ACCOUNT
    })
    cy.get('@SETTINGS').then((SETTINGS) => {
        window.SETTINGS = SETTINGS
    })
    cy.get('@POST').then((POST) => {
        window.POST = POST
    })
})