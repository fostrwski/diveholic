/* global JQuery */
import 'cypress-real-events';

Cypress.Commands.add('signIn', (testUserId) => {
  cy.session(`Test user ${testUserId}`, () => {
    cy.visit('/signin');
    cy.log('Filling out email');
    cy.getByDataCy('email').type(Cypress.env(`test_user_${testUserId}_email`));
    cy.log('Filling out password');
    cy.getByDataCy('password').type(
      Cypress.env(`test_user_${testUserId}_password`),
    );
    cy.getByDataCy('submit').click();
    cy.contains(`Hi ${Cypress.env(`test_user_${testUserId}_firstname`)}`);
  });
});

Cypress.Commands.add('getByDataCy', (dataCy) =>
  cy.get(`[data-cy='${dataCy}']`),
);

Cypress.Commands.add('getInputByName', (name) =>
  cy.get(`input[name='${name}']`),
);

/* eslint-disable no-unused-vars */
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Signs in with test user credentials
       * @param testUserId - test user id to sign in
       * @example cy.signIn()
       */
      signIn(testUserId: number): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to get input by data-cy
       * @example cy.getByDataCy("submit")
       */
      getByDataCy(dataCy: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Custom command to get input by name
       * @example cy.getInputByName("date")
       */
      getInputByName(name: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
/* eslint-enable no-unused-vars */

export {};
