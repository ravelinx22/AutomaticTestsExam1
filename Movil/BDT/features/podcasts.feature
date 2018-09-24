Feature: Search in the app
  As a user I want to subscribe and manipulate my subscriptions in order to listen to my favorite ones.

  Scenario: As a user I want to subscribe to a podcast
    Given I swipe left
    And I wait
    And I press "Subscripciones"
    And I wait
    And I press view with id "txtvTitle"
    And I press view with id "butSearchItunes"
    And I press view with id "action_search"
    And I enter text "This is Only a Test" into field with id "search_src_text"
    And I press the enter button
    And I wait
    And I press podcasts results list item number 1
    And I wait
    And I press view with id "butSubscribe"
    Then I see the text "ABRIR PODCAST"

  Scenario: As a user I want to see my subscriptions
    Given I press podcasts list item number 1
    And I wait
    Then I see the text "This is Only a Test"

  Scenario: As a user I want to see my episodes
    Given I swipe left
    And I wait
    And I press "Episodios"
    And I wait
    And I press episodes list item number 1
    And I wait
    Then I see the text "Episode"

  Scenario: As a user I want to rename a podcast
    Given I swipe left
    And I wait
    And I press "Subscripciones"
    And I wait
    And I long press podcasts list item number 1
    And I wait
    And I press "Renombrar Podcast"
    And I wait
    And I enter text "2" into field with id "input"
    And I wait
    And I press view with id "md_buttonDefaultPositive"
    And I wait
    And I press podcasts list item number 1
    And I wait
    Then I see the text "This is Only a Test2"

  Scenario: As a user I want to delete a podcast
    Given I long press podcasts list item number 1
    And I wait
    And I press "Eliminar podcast"
    And I wait
    And I press view with id "button1"
    And I wait
    Then I don't see the text "This is Only a Test2"
