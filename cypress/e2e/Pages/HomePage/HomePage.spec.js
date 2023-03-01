import {homepageSelectors} from "../../selectors/selectors";

class HomePage {
  enterURL() {
    cy.visit("/");

  }

  acceptCookies() {
    return cy.get(homepageSelectors.acceptCookiesSelector).click();
  }

  verifyPageTitle(title) {
    return cy.title().should("eq", title);
  }

  verifyHeaderBanner() {
    return cy.get(homepageSelectors.headerBannerSelector).should('be.visible');
  }

  validateMenus(menu) {
    cy.contains(menu);
    return this;
  }
}
const homePage = new HomePage();
export default homePage;