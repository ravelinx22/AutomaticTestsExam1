Feature: Class page in losestudiantes
  As a user I want to see a class page in order to see the reviews

  Scenario Outline: Search for a class
    Given I go to losestudiantes home screen
    When I search for <name>
    And I click the search box results first option
    Then I expect to see the name of <name>

    Examples:
      | name  |
      |Pruebas Automáticas - MISO4208|
      |Constr. Aplicaciones Móviles - ISIS3510|
