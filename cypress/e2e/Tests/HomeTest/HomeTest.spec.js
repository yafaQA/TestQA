/// <reference types=”cypress” />

import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../Pages/HomePage/HomePage.spec";

beforeEach(()=> {
  cy.viewport(1600, 900);
});

Given("I navigate to the Website", () => {
  homePage.enterURL();
  homePage.acceptCookies();
});

Then("Validate the title", (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.verifyPageTitle(element.title);
  });
});

Then("Validate the presence of header banner", () => {
  homePage.verifyHeaderBanner();
});

Then("Validate the headers in home page", (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.validateMenus(element.menu);
  });
});

Then("Validate the footers in home page", (datatable) => {
  datatable.hashes().forEach((element) => {
    homePage.validateMenus(element.menu);
  });
});