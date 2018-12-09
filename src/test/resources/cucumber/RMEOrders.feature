
  Feature: Verification of orders.json service

    Background:
      Given All the setup is completed
      And I change the endpoint to RMESIT


    Scenario Outline: Validate all the fields and their values of Orders.json against database values
      Given I hit the GET service url /api/cs/pb/apac/v3/Orders.json?bu=<BU>&orderid=<order_ID>&includeHistroicalOrders=true

    Examples:
      |BU   |order_ID         |
      |0058 |SA004GVJ         |
      |0059 |OPODSC1634400008 |