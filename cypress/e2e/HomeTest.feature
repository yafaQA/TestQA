
Feature: Home Page

  Background:
    Given I navigate to the Website
  Scenario: I want to validate title of home page
    Then Validate the title
      |title|
      |Foncia : Agence immobilière,Vente, Location, Syndic, Gestion locative    |

  Scenario: I want to validate  header banner presence in home page
    Then Validate the presence of header banner

  Scenario: I want to verify Header content of home page
    Then Validate the headers in home page
      |menu              |
      |Acheter           |
      |Louer             |
      |Vendre            |
      |Gestion locative  |
      |Syndic            |
      |Vacances          |
      |Découvrir Foncia  |
      |Carrières         |
      |MyFoncia          |

  Scenario:  I want to verify footer content of home page
    Then Validate the footers in home page
      |menu            |
      |Foncia          |
      |Notre site      |
      |Infos utiles    |
      |Nous suivre     |
