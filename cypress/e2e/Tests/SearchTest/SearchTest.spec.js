import {Then} from "@badeball/cypress-cucumber-preprocessor";
import searchProduct from "../../Pages/SearchProduct/SearchProduct.spec";

Then("perform a rent search", (dataTable) => {
  dataTable.hashes().forEach((element) => {
    searchProduct.searchProduct(element.type, element.price, element.city);
  });
});

Then("Verify search results", (dataTable) => {
  dataTable.hashes().forEach((element) => {
    searchProduct.verifySearchProduct(element.location, element.price);
  });
})