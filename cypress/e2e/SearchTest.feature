
Feature: Search An Apartment
  Background:
    Given I navigate to the Website

  Scenario: Rent An Apartment in Paris with max rent 1600
    Then perform a rent search
      |type       |price|city |
      |Appartement|1600 |75001|

    Then Verify search results
      |location    |price      |
      |Paris       |1600       |
