/// <reference types="cypress" />

describe('Login', () => {
    before('Accept cookies', () => {
        cy.visit(Cypress.config('baseUrl'));
        cy.iframe('#gdpr-consent-notice').find('#save').should('be.visible').click()
    });

    it('Login to the site', () => {

        cy.get('input[name ="uid"]')
          .type(Cypress.env('login'));
        
        cy.get('input[name ="password"]')
          .type(Cypress.env('password')); 
        
        cy.get('input[name ="btnLogin"]')
          .click();
        
        cy.url().should('eq', 'https://www.demo.guru99.com/V4/manager/Managerhomepage.php');
    });

    after('Leave page', () => {
        cy.xpath('//a[contains(text(),"Log out")]').scrollIntoView().should('be.visible').click();
        cy.url().should('eq', 'https://www.demo.guru99.com/V4/index.php');
    });
});