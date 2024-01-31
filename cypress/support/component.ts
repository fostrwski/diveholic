import { mount } from 'cypress/react18';

import './commands';

/* eslint-disable no-unused-vars */
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
/* eslint-enable no-unused-vars */

Cypress.Commands.add('mount', mount);
