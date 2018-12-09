
Feature: Testing the capi accountactivities service

  Background:
    Given All the setup is completed
    And I change the endpoint to CAPIUAT
    And I set the PID as M720933

  Scenario Outline: Verify that AccountActivities service has the same response as the AccountActivityNRT for forward balance page
    Given I want exact match
    And I hit the GET service url /portfolio/AccountActivities.json?BU=<BU>&CIF=<CIF>&portfolioId=<portfolio_id>
    And I Check for the Success Status Code
    When I process AccountActivities response using xslt

    And I change the endpoint to GECKOSRVUAT
    And I hit the GET service url /portfolio/AccountActivityNRT.json?BU=<BU>&CIF=<CIF>&portfolioId=<portfolio_id>
    And I Check for the Success Status Code
    Then I process AccountActivityNRT response using xslt

    And I verify the AccountActivity service returns all the accounts from AccountActivityNRT service
  Examples:
    |BU   |CIF  |portfolio_id  |
    |0058 |18100|18100-1       |


  Scenario Outline: Verify that AccountActivities servive will merge the response of AccountActivity and AccountActivityNRT service response
    Given I want exact match
    And I hit the GET service url /portfolio/AccountActivities.json?BU=<BU>&CIF=<CIF>&portfolioId=<portfolio_id>
    And I Check for the Success Status Code
    When I process AccountActivities response using xslt

    And I change the endpoint to GECKOSRVUAT
    And I hit the GET service url /trview/v1/AccountActivityNRT.json?BU=<BU>&CIF=<CIF>&portfolioId=<portfolio_id>
    And I Check for the Success Status Code
    Then I process AccountActivityNRT response using xslt

    And I change the endpoint to DPXUAT
    And I hit the GET service url /portfolio/v3/AccountActivity.json?BU=<BU>&CIF=<CIF>&portfolioId=<portfolio_id>
    And I Check for the Success Status Code
    Then I process AccountActivity response using xslt

    And I verify the AccountActivity service returns all the accounts from both the services
  Examples:
    |BU   |CIF  |portfolio_id  |
    |0058 |18100|18100-1       |