Feature: Compare 2 service responses

  Scenario: Testing of 2 service responses
    Given I change the endpoint to RMEUAT
    When I hit the GET service url /path
    And I Check for the Success Status Code
    Then I store the response of first web service call
    And I change the endpoint to RMESIT
    When I hit the GET service url /path2
    And I Check for the Success Status Code
    Then I store the response of second web service call
    And I compare the two web service responses
      | webSerivceResponse1Field | webServiceResponse2Field |
      | $..field1                | $..field2                |