Feature: Search Feature

Scenario: Simple Google Test
    Given I navigate to Google
    When I search for "dogs"
    Then I expect to see results for "Dogs"