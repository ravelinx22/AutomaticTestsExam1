Feature: Professor page in losestudiantes
  As a user I want to see a professors page in order to see his reviews

  Scenario Outline: Search for a professor
    Given I go to losestudiantes home screen
    When I search for <name>
    And I click the search box results first option
    Then I expect to see the name of <name>

    Examples:
      | name  |
      |Mario Linares Vasquez|

  Scenario Outline: Filter professor page by class
    Given I go to Mario Linares professor page
    When I filter by class <class>
    Then I expect class filter <class> should be checked

    Examples:
      | class  |
      |ISIS3510|
      |MISO4208|
      |ISIS1206|

  Scenario Outline: See professor statistics
    Given I go to Mario Linares professor page
    When I click see statistics option
    Then I expect to see professor trend statistics
    Then I expect to see professor general statistics
