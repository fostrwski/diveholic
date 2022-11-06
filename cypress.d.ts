declare namespace Cypress {
  interface Cypress {
    env(key: "test_user_1_email"): string;
    env(key: "test_user_1_password"): string;
    env(key: "test_user_1_firstname"): string;
  }
}
