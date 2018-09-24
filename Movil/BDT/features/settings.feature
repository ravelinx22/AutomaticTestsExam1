Feature: Search in the app
  As a user I want to change the apps background color in order to enjoy better the app.

  Scenario: Change apps default background.
    Given I swipe left
    And I wait
    And I press "Ajustes"
    And I wait
    And I press "Elegir un tema"
    And I wait
    Then I press "Oscuro"
