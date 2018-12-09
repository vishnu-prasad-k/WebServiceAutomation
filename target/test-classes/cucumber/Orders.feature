@Orderbook_Test
  Feature: Verification of orders.json service

    Background:
      Given All the setup is completed
      And I change the endpoint to RMEUAT


    Scenario Outline: Validate all the fields and their values of Orders.json against database values
      When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu=<BU>&orderid=<order_ID>&includeHistroicalOrders=true
      And I set the Database credentials to OYUSIT
      Then I establish the Database connection
      And I pass the database query
      """
      SELECT * from DSP_INT_ORDER t where t.ORDER_ID='<order_ID>' and t.BU='<BU>'
      """
      And I validate the value of the following data from the webservice and database
      |wsresponsefieldname      |dbfieldname            |type     |
      |portfolioId              |PORTFOLIO_ID           |String   |
      |orderId                  |ORDER_ID               |String   |
    Examples:
      |BU   |order_ID         |
      |0058 |SA004GVJ         |
      |0059 |OPODSC1634400008 |



    Scenario Outline: Validate the basic functionality of OrderValidationHistory service
      Given I have the below json input
      """
      {
      "userPID":"<primary_id>","orderIDs":[{"orderID":"<order_id>","sourceSystem":"<source_system>"}]
      }
      """
      When I hit the POST service url /orderbook/v2/OrderValidationHistory.json
      And I set the Database credentials to OYUSIT
      Then I establish the Database connection
      And I pass the database query
      """
      SELECT * from DSP_INT_ORDER t where t.ORDER_ID='<order_ID>'
      """
      And I validate the value of the following data from the webservice and database
        |wsresponsefieldname      |dbfieldname            |type     |
        |portfolioId              |PORTFOLIO_ID           |String   |
        |orderId                  |ORDER_ID               |String   |
      Examples:
        |primary_id   |order_ID         |source_system  |
        |123456       |SA004GVJ         |SpiritAsia     |
        |34298832     |OPODSC1634400008 |T24            |

    Scenario: To verify the success response of Orders service
      When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu=<BU>&orderid=<order_ID>&includeHistroicalOrders=true
      |BU   |order_ID|
      |0058 |234234  |
      Then I Check for the Success Status Code

    Scenario: To verify the failure response of Orders service
      When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu=<BU>&orderid=<order_ID>&includeHistroicalOrders=true
        |BU   |order_ID|
        |0058 |234234  |
      Then I check for Failure Status Code as 401

    Scenario Outline: Verify the fields in the orders service
      When I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu=<BU>&orderid=<order_ID>&includeHistroicalOrders=true
      And I Check for the Success Status Code
      Then I verify the following fields are present in the service response
      |orderId|groupId|oneTimeSttAmount|
    Examples:
      |BU  |order_ID|
      |0058|23423   |
      |0059|234324  |