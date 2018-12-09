Feature: Test
  This is a test feature to check if the project is working fine

  @DBTest
  Scenario: Test1
    This scenario is to test the DB connection
    Given I set the Database credentials
    |DB connection details|
    |Db username         |
    |Db password         |
    When I establish the Database connection
    Then I pass the database query
    """
    select * from table;
    """
    And I close the database connection