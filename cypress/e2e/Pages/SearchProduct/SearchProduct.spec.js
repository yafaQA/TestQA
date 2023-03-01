import {homepageSelectors, searchpageSelectors} from "../../selectors/selectors";
import '@testing-library/cypress/add-commands';

class SearchProduct {
  searchProduct(type, price, city) {
    cy.get(homepageSelectors.searchProjectSelector).scrollIntoView();
    cy.get(homepageSelectors.searchPriceSelector).type(price);
    cy.get(homepageSelectors.searchCitySelector).type(city);
    cy.get(homepageSelectors.searchCitySuggestionListSelector)
      .should('be.visible').children()
      .its('length').should('be.gt', 1);
    cy.get(homepageSelectors.searchCitySuggestionListSelector).eq(0).click();
    cy.get(homepageSelectors.searchTypeSelector).click();
    cy.findByText(type).click();
    cy.get(homepageSelectors.searchProjectSelector).click({force: true});
    cy.get(homepageSelectors.searchProjectSuggestionListSelector).children().eq(1).click();
    cy.get(homepageSelectors.searchBtnSelector).click();
    cy.url().should('contain', '/location/');
  }

  verifySearchProduct(location, price) {
    this.verifyCities(location);
    this.verifyPricies(price);
  }

  verifyCities(city) {
    cy.xpath(searchpageSelectors.citylabelresultsSelector).each((element) => {
      let actualCity = element.text();
      expect(actualCity).to.contains(city.toUpperCase());
    });
  }

  verifyPricies(price) {
    cy.xpath(searchpageSelectors.priceLabelResultsSelector).each((element) => {
      const expectedPrice = parseFloat(price);
      let actualPrice = element.text();
      actualPrice = parseFloat(actualPrice.replace(/[\u00A0\u1680\u180e\u2000-\u2009\u200a\u200b\u202f\u205f\u3000]/g, ''));
      expect(actualPrice).to.be.lessThan(expectedPrice);
    });
  }
}
const searchProduct = new SearchProduct();
export default searchProduct;