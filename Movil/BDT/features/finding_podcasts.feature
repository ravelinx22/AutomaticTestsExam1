Feature: Search in the app
  As a user I want to search for podcasts in the app in order to listen to my favorite ones.

  Scenario: As a user I want to find a podcasts using iTunes in order to listen to my favorite one.
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
    Then I see the text "This is Only a Test"

  Scenario: As a user I want to find a podcasts using FYYD in order to listen to my favorite one.
    Given I press view with id "txtvTitle"
    And I press view with id "butSearchFyyd"
    And I enter text "This is Only a Test" into field with id "search_src_text"
    And I press the enter button
    And I wait
    And I press podcasts results list item number 1
    And I wait
    Then I see the text "This is Only a Test"

  Scenario: As a user I want to find a podcasts using FYYD in order to listen to my favorite one.
    Given I press view with id "txtvTitle"
    And I press view with id "butBrowseGpoddernet"
    And I press view with id "action_search"
    And I enter text "This is Only a Test" into field with id "search_src_text"
    And I press the enter button
    And I wait
    And I press podcasts results list item number 1
    And I wait
    Then I see the text "This is Only a Test"
